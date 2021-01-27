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

cases = cases_deaths['cases']

fig = px.scatter(cases_deaths, x="county", y="cases", color="county",
                 size=radius_size(cases), hover_data=['county'])
fig.show()