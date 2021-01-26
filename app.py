##################################################
#        import dependencies                     #
##################################################
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from config import pg_password

#####################################################
#               Database Setup                      #
#####################################################
# Create connection string to postgres
connection_string = f"postgres:{pg_password}@localhost:5432/covid_mask_effect_db"
engine = create_engine(f'postgresql://{connection_string}')

# Reflect database into a new model using Base = automap()
Base = automap_base()

# Setup .prepare(engine, reflect=True) to reflect tables
Base.prepare(engine, reflect=True)

# Create variables for cali_2020, cali_county, norcal_geo, and socal_geo tables in postgres
cali_data = Base.classes.cali_2020
cali_counties = Base.classes.cali_county
norcal_data = Base.classes.norcal_geo
socal_data = Base.classes.socal_geo

#######################################################
#               Setup Flask                           #
#######################################################

# Initiate Flask app
app = Flask(__name__)

@app.route('/')
def home_page():
    welcome = "Welcome! Currently working on the magic that will render this page"
    return(welcome)

#############################################################
#       Create Endpoints to return jsonify data             #
#############################################################

@app.route("/api/v3.0/cali_cases_by_date")
def cali_cases_by_date():
    # Connect to engine to connect to postgres database
    session = Session(engine)
 
    # session.query cali_data for cases and date to use in calendar view visualization
    cali_dates = session.query(cali_data.date).all()
    cali_cases = session.query(cali_data.cases).all()

    # return data with jsonify
    return jsonify([{"date": cali_dates, "california total cases": cali_cases}])

@app.route("/api/v3.0/cali_cases_by_county")
def cali_cases_by_date():
    # Connect to engine to connect to postgres database
    session = Session(engine)
 
    # session.query for cali_counties for county, cases and date
    cali_counties = session.query(cali_counties.county).all()
    cali_county_cases = session.query(cali_counties.cases).all()
    cali_count_dates = session.query(cali_counties.date).all()

    # return data with jsonify
    return jsonify([{"All Cali Cases": cali_cases, "date": cali_dates}])

# nocal_county_cases endpoint
@app.route("/api/v3.0/nocal_county_cases")
def nocal_county_cases():
    # Connect to engine to connect to postgres database
    session = Session(engine)
    
    # session.query for all nocal_data for fips and cases
    norcal_counties = session.query(norcal_data.county).all()
    norcal_cases = session.query(norcal_data.cases).all()
    norcal_lat = session.query(norcal_data.latitude).all()
    norcal_long = session.query(norcal_data.longitude).all()
    norcal_deaths = session.query()
    # return data with jsonify
    return jsonify([{"county": norcal_counties, "cases": norcal_cases, "latitude": norcal_lat, "longitude": norcal_long}])

# socal_county_cases endpoint
@app.route("/api/v3.0/socal_county_cases")
def socal_county_cases():
    # Connect to engine
    session = Session(engine)

    # session.query for all socal_data for fips and cases
    socal_counties = session.query(socal_data.county).all()
    socal_cases = session.query(socal_data.cases).all()
    socal_lat = session.query(socal_data.latitude).all()
    socal_long = session.query(socal_data.longitude).all()
    socal_deaths = 
    # return data with jsonify
    return jsonify([{"county": socal_counties, "cases": socal_cases,"latitude": socal_lat, "longitude": socal_long}])

# Run app
if __name__ == "__main__":
    app.run(debug=True) 