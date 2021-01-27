import os
import plotly.graph_objects as go
import pandas as pd
import mimetypes

print(mimetypes.guess_extension("application/octet-stream"))

# Read in data
cases_deaths = pd.read_csv("../../output/covid_cali_2020_df.csv")

import plotly.express as px
import pandas as pd

fig = px.line(cases_deaths, x='date', y='cases', title='COVD-19 2020')

fig.update_xaxes(rangeslider_visible=True)
fig.show()

import plotly.graph_objects as go
import datetime
import numpy as np
np.random.seed(1)

dates = cases_deaths['date'].tolist()
cases = cases_deaths['cases'].tolist()
county = cases_deaths['county'].tolist()

z = np.random.poisson(size=(len(cases), len(dates)))

fig = go.Figure(data=go.Heatmap(
        z=z,
        x=dates,
        y=cases,
        colorscale='Viridis'))

fig.update_layout(
    title='COVID-19',
    xaxis_nticks=342)
fig.show()

# # Create variables for deaths and cases data
# deaths = cases_deaths['deaths'].tolist()
# cases = cases_deaths['cases'].tolist()
# dates = cases_deaths['date'].tolist()
# print(max(cases))
# fig = go.Figure(data=[go.Scatter(
#     x= dates,
#     y= cases,
#     mode='markers',
#     marker=dict(
#         color=['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
#         size=[40, 60, 80, 100],
#         showscale=True
#     )
# )])
# fig.show()
# county_cases = 
# # Read in data
# cases_deaths = pd.read_csv("../../output/cases_deaths_df.csv")

# # Create variables for deaths and cases data
# deaths = cases_deaths['deaths'].tolist()
# cases = cases_deaths['cases'].tolist()
# print(max(cases))
# fig = go.Figure(data=[go.Scatter(
#     x= deaths,
#     y= cases,
#     mode='markers',
#     marker=dict(
#         color=['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
#         size=[40, 60, 80, 100],
#         showscale=True
#     )
# )])
# fig.show()
# # county_cases = pd.read_csv('https://github.com/EdwinVargas22/Project-2-Group-4/blob/main/output/cali_county.csv')

# values = county_cases['cases'].tolist()
# fips = county_cases['fips'].tolist()

# endpts = list(np.mgrid[min(values):max(values):4j])
# colorscale = ["#030512","#1d1d3b","#323268","#3d4b94","#3e6ab0",
#               "#4989bc","#60a7c7","#85c5d3","#b7e0e4","#eafcfd"]
# fig = ff.create_choropleth(
#     fips=fips, values=values, show_state_data=True,
#     colorscale=colorscale, binning_endpoints=endpts, round_legend_values=True,
#     plot_bgcolor='rgb(229,229,229)',
#     paper_bgcolor='rgb(229,229,229)',
#     legend_title='Population by County',
#     county_outline={'color': 'rgb(255,255,255)', 'width': 0.5},
#     exponent_format=True,
# )
# fig.layout.template = None
# fig.show()