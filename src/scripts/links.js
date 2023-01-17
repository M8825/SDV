const LINKS = {
    'population': {
        0: 'https://api.census.gov/data/2021/pep/population?get=POP_2021,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        1: 'https://api.census.gov/data/2021/pep/population?get=POP_2020,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        2: 'https://api.census.gov/data/2019/pep/population?get=POP,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        3: 'https://api.census.gov/data/2018/pep/population?get=POP,GEONAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        4: 'https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d'
    },

    'employment': {
        0: 'https://api.census.gov/data/timeseries/govs?get=NAME,TOT_EMP&for=state:*&time=2021&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        1: 'https://api.census.gov/data/timeseries/govs?get=NAME,TOT_EMP&for=state:*&time=2020&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        2: 'https://api.census.gov/data/timeseries/govs?get=NAME,TOT_EMP&for=state:*&time=2019&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        3: 'https://api.census.gov/data/timeseries/govs?get=NAME,TOT_EMP&for=state:*&time=2018&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
        4: 'https://api.census.gov/data/timeseries/govs?get=NAME,TOT_EMP&for=state:*&time=2017&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d'
    },

    'gdp': 'https://apps.bea.gov/api/data?&UserID=63D07D0B-8744-419D-821C-656CB11239D2&method=getdata&datasetname=Regional&GeoFips=STATE&LineCode=1&TableName=CAGDP2&ResultFormat=JSON',
    'personalIncome': 'https://apps.bea.gov/api/data?&UserID=63D07D0B-8744-419D-821C-656CB11239D2&method=getdata&datasetname=Regional&GeoFips=STATE&LineCode=30&TableName=SAINC50&ResultFormat=JSON'
}

export default LINKS;
