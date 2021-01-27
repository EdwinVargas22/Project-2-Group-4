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