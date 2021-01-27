import os
import plotly.graph_objects as go
import pandas as pd
import mimetypes
import numpy as np
import datetime
import plotly.figure_factory as ff
import plotly.express as px

# deal with mimetype error
print(mimetypes.guess_extension("application/octet-stream"))

# Read in csv
cases_deaths = pd.read_csv("../../output/cali_county.csv")
# df = px.cases_deaths.iris()

# # set up variables
# dates = cases_deaths['date'].tolist()
# cases = cases_deaths['cases'].tolist()
# county = cases_deaths['county'].tolist()

fig = px.scatter(cases_deaths, x="county", y="cases", color="county",
                 size='cases', hover_data=['county'])
fig.show()

# z = np.random.poisson(size=(len(cases), len(dates)))

# fig = go.Figure(data=go.Heatmap(
#         x=dates,
#         y=cases,
#         colorscale='Viridis'))


# fig.update_layout(
#     title='COVID-19',
#     xaxis_nticks=58)
# fig.show()

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