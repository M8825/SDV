# Index chart
* Line chart will be for last 5 years ideally


## DATA API
- [X] Census - Population by state:
    - https://api.census.gov/data/2021/pep/population?get=POP_2021,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d

- [X] Census - Full Employment by State:
    - https://api.census.gov/data/timeseries/govs?get=NAME,TOT_EMP,TOT_EMP_CV&for=state:*&time=2020&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d
    * State and Local Government Employment and Payroll Data:
        * US and States: 2017 - 2021;
        * State Government Employment and Payroll Data: US and States: 2017 - 2021;

- [X] Bureau of Labor Statistics - "Gross Domestic Product (GDP): All industry total" - last five years
    - https://apps.bea.gov/api/data?&UserID=63D07D0B-8744-419D-821C-656CB11239D2&method=getdata&datasetname=Regional&GeoFips=STATE&LineCode=1&TableName=CAGDP2&ResultFormat=XML

    * WHAT I NEED:
        * GeoName - State name
        * DataValue - GDP



- [ ] GDP Per Capita - I'll take population and divide it by GDP

- [ ] Bureau of Labor Statistics - Per Capita Personal Income - Alabama link - Last 5 years
    - https://apps.bea.gov/api/data?&UserID=63D07D0B-8744-419D-821C-656CB11239D2&method=getdata&datasetname=Regional&GeoFips=01000&LineCode=30&TableName=SAINC50&ResultFormat=JSON



## State passed object

{
    "name": "Alabama",
    "population": [4903185, 1],
    "gdp": 222,
    "gdpPerCapita": 45,
    "employment": 2.5,
    "personalIncome": 45
}


# TODOs
## State object
    [x] - 1 or 0 indicating if the state pop increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state gdp increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state gdpPerCapita increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state employment increased or decreased compared to last year.
    [ ] - 1 or 0 indicating if the state personalIncome increased or decreased compared to last year.

## Stats
- [ ] Initialize with USA stats
    * I don't have a stats for USA and I'm considering to hard code it.

## Performance
- [ ] Instead of fetching map, load it from a local file


{
    "BEAAPI": {
        "Results": {
            "Statistic": "Gross Domestic Product (GDP): All industry total",
            "Data": [
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "00000",
                    "GeoName": "United States *",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "23,315,081,000",
                    "NoteRef": "*"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "00000",
                    "GeoName": "United States *",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "21,060,474,000",
                    "NoteRef": "*"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "00000",
                    "GeoName": "United States *",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "21,380,976,000",
                    "NoteRef": "*"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "00000",
                    "GeoName": "United States *",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "20,533,058,000",
                    "NoteRef": "*"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "00000",
                    "GeoName": "United States *",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "19,477,337,000",
                    "NoteRef": "*"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "01000",
                    "GeoName": "Alabama",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "214,606,320"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "01000",
                    "GeoName": "Alabama",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "231,561,934"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "01000",
                    "GeoName": "Alabama",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "223,859,308"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "01000",
                    "GeoName": "Alabama",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "230,892,059"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "01000",
                    "GeoName": "Alabama",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "254,109,734"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "02000",
                    "GeoName": "Alaska",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "57,349,378"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "02000",
                    "GeoName": "Alaska",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "50,475,190"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "02000",
                    "GeoName": "Alaska",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "54,899,608"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "02000",
                    "GeoName": "Alaska",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "54,728,232"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "02000",
                    "GeoName": "Alaska",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "53,301,510"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "04000",
                    "GeoName": "Arizona",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "332,001,755"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "04000",
                    "GeoName": "Arizona",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "372,393,504"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "04000",
                    "GeoName": "Arizona",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "351,879,482"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "04000",
                    "GeoName": "Arizona",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "382,072,265"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "04000",
                    "GeoName": "Arizona",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "420,026,672"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "05000",
                    "GeoName": "Arkansas",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "148,676,113"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "05000",
                    "GeoName": "Arkansas",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "133,969,089"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "05000",
                    "GeoName": "Arkansas",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "127,535,660"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "05000",
                    "GeoName": "Arkansas",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "131,578,279"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "05000",
                    "GeoName": "Arkansas",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "122,466,721"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "06000",
                    "GeoName": "California",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,728,743,053"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "06000",
                    "GeoName": "California",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,042,694,071"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "06000",
                    "GeoName": "California",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,897,200,661"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "06000",
                    "GeoName": "California",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,020,173,358"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "06000",
                    "GeoName": "California",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,373,240,664"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "08000",
                    "GeoName": "Colorado",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "436,359,473"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "08000",
                    "GeoName": "Colorado",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "391,263,272"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "08000",
                    "GeoName": "Colorado",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "394,534,731"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "08000",
                    "GeoName": "Colorado",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "372,212,054"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "08000",
                    "GeoName": "Colorado",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "349,156,537"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "09000",
                    "GeoName": "Connecticut",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "271,443,219"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "09000",
                    "GeoName": "Connecticut",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "279,922,965"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "09000",
                    "GeoName": "Connecticut",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "288,536,341"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "09000",
                    "GeoName": "Connecticut",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "276,223,270"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "09000",
                    "GeoName": "Connecticut",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "298,395,175"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "10000",
                    "GeoName": "Delaware",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "81,160,011"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "10000",
                    "GeoName": "Delaware",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "75,818,588"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "10000",
                    "GeoName": "Delaware",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "76,923,671"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "10000",
                    "GeoName": "Delaware",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "72,168,346"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "10000",
                    "GeoName": "Delaware",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "68,302,544"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "11000",
                    "GeoName": "District of Columbia",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "133,243,470"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "11000",
                    "GeoName": "District of Columbia",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "139,722,517"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "11000",
                    "GeoName": "District of Columbia",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "143,990,792"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "11000",
                    "GeoName": "District of Columbia",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "144,720,005"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "11000",
                    "GeoName": "District of Columbia",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "153,670,489"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "12000",
                    "GeoName": "Florida",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,255,558,339"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "12000",
                    "GeoName": "Florida",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,116,726,776"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "12000",
                    "GeoName": "Florida",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,111,392,235"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "12000",
                    "GeoName": "Florida",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,057,255,398"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "12000",
                    "GeoName": "Florida",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,003,144,009"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "13000",
                    "GeoName": "Georgia",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "573,777,162"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "13000",
                    "GeoName": "Georgia",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "602,366,373"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "13000",
                    "GeoName": "Georgia",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "637,992,469"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "13000",
                    "GeoName": "Georgia",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "625,425,699"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "13000",
                    "GeoName": "Georgia",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "691,626,930"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "15000",
                    "GeoName": "Hawaii",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "91,096,121"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "15000",
                    "GeoName": "Hawaii",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "82,535,506"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "15000",
                    "GeoName": "Hawaii",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "91,912,711"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "15000",
                    "GeoName": "Hawaii",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "90,330,823"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "15000",
                    "GeoName": "Hawaii",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "87,217,413"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "16000",
                    "GeoName": "Idaho",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "71,730,341"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "16000",
                    "GeoName": "Idaho",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "77,395,407"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "16000",
                    "GeoName": "Idaho",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "82,847,231"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "16000",
                    "GeoName": "Idaho",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "85,927,756"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "16000",
                    "GeoName": "Idaho",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "96,282,794"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "17000",
                    "GeoName": "Illinois",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "945,673,819"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "17000",
                    "GeoName": "Illinois",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "856,942,875"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "17000",
                    "GeoName": "Illinois",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "889,540,088"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "17000",
                    "GeoName": "Illinois",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "865,661,045"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "17000",
                    "GeoName": "Illinois",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "824,913,388"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "18000",
                    "GeoName": "Indiana",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "352,601,027"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "18000",
                    "GeoName": "Indiana",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "373,196,804"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "18000",
                    "GeoName": "Indiana",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "381,132,281"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "18000",
                    "GeoName": "Indiana",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "373,781,577"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "18000",
                    "GeoName": "Indiana",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "412,975,161"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "19000",
                    "GeoName": "Iowa",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "216,860,235"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "19000",
                    "GeoName": "Iowa",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "196,982,856"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "19000",
                    "GeoName": "Iowa",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "195,708,687"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "19000",
                    "GeoName": "Iowa",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "191,516,563"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "19000",
                    "GeoName": "Iowa",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "184,561,264"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "20000",
                    "GeoName": "Kansas",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "165,182,514"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "20000",
                    "GeoName": "Kansas",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "172,342,960"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "20000",
                    "GeoName": "Kansas",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "176,564,384"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "20000",
                    "GeoName": "Kansas",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "177,580,853"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "20000",
                    "GeoName": "Kansas",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "191,380,562"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "21000",
                    "GeoName": "Kentucky",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "237,182,031"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "21000",
                    "GeoName": "Kentucky",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "216,865,623"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "21000",
                    "GeoName": "Kentucky",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "218,494,732"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "21000",
                    "GeoName": "Kentucky",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "208,558,577"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "21000",
                    "GeoName": "Kentucky",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "201,872,212"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "22000",
                    "GeoName": "Louisiana",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "241,213,425"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "22000",
                    "GeoName": "Louisiana",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "256,677,836"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "22000",
                    "GeoName": "Louisiana",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "255,481,914"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "22000",
                    "GeoName": "Louisiana",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "232,527,751"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "22000",
                    "GeoName": "Louisiana",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "258,571,307"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "23000",
                    "GeoName": "Maine",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "77,963,313"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "23000",
                    "GeoName": "Maine",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "70,740,045"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "23000",
                    "GeoName": "Maine",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "68,690,422"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "23000",
                    "GeoName": "Maine",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "65,477,103"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "23000",
                    "GeoName": "Maine",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "62,253,597"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "24000",
                    "GeoName": "Maryland",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "400,156,999"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "24000",
                    "GeoName": "Maryland",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "410,812,185"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "24000",
                    "GeoName": "Maryland",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "420,371,307"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "24000",
                    "GeoName": "Maryland",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "410,931,043"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "24000",
                    "GeoName": "Maryland",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "443,929,939"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "25000",
                    "GeoName": "Massachusetts",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "641,332,169"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "25000",
                    "GeoName": "Massachusetts",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "585,150,291"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "25000",
                    "GeoName": "Massachusetts",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "589,904,286"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "25000",
                    "GeoName": "Massachusetts",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "563,054,311"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "25000",
                    "GeoName": "Massachusetts",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "531,007,971"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "26000",
                    "GeoName": "Michigan",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "502,130,398"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "26000",
                    "GeoName": "Michigan",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "520,245,090"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "26000",
                    "GeoName": "Michigan",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "532,216,994"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "26000",
                    "GeoName": "Michigan",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "520,105,276"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "26000",
                    "GeoName": "Michigan",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "572,205,845"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "27000",
                    "GeoName": "Minnesota",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "412,458,614"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "27000",
                    "GeoName": "Minnesota",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "376,814,364"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "27000",
                    "GeoName": "Minnesota",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "383,956,557"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "27000",
                    "GeoName": "Minnesota",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "372,011,280"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "27000",
                    "GeoName": "Minnesota",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "353,664,935"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "28000",
                    "GeoName": "Mississippi",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "109,600,793"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "28000",
                    "GeoName": "Mississippi",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "112,201,678"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "28000",
                    "GeoName": "Mississippi",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "114,234,372"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "28000",
                    "GeoName": "Mississippi",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "115,123,433"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "28000",
                    "GeoName": "Mississippi",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "127,307,664"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "29000",
                    "GeoName": "Missouri",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "358,571,975"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "29000",
                    "GeoName": "Missouri",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "330,249,929"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "29000",
                    "GeoName": "Missouri",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "332,485,836"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "29000",
                    "GeoName": "Missouri",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "318,153,534"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "29000",
                    "GeoName": "Missouri",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "308,002,320"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "30000",
                    "GeoName": "Montana",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "48,533,884"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "30000",
                    "GeoName": "Montana",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "50,916,937"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "30000",
                    "GeoName": "Montana",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "51,925,448"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "30000",
                    "GeoName": "Montana",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "52,355,835"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "30000",
                    "GeoName": "Montana",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "58,699,848"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "31000",
                    "GeoName": "Nebraska",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "146,285,418"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "31000",
                    "GeoName": "Nebraska",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "134,580,806"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "31000",
                    "GeoName": "Nebraska",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "131,866,927"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "31000",
                    "GeoName": "Nebraska",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "127,015,459"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "31000",
                    "GeoName": "Nebraska",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "121,726,578"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "32000",
                    "GeoName": "Nevada",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "160,653,063"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "32000",
                    "GeoName": "Nevada",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "170,257,634"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "32000",
                    "GeoName": "Nevada",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "182,186,338"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "32000",
                    "GeoName": "Nevada",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "172,562,622"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "32000",
                    "GeoName": "Nevada",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "194,486,640"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "33000",
                    "GeoName": "New Hampshire",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "99,673,261"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "33000",
                    "GeoName": "New Hampshire",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "88,337,671"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "33000",
                    "GeoName": "New Hampshire",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "87,338,184"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "33000",
                    "GeoName": "New Hampshire",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "83,869,796"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "33000",
                    "GeoName": "New Hampshire",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "80,597,998"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "34000",
                    "GeoName": "New Jersey",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "587,421,013"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "34000",
                    "GeoName": "New Jersey",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "614,106,535"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "34000",
                    "GeoName": "New Jersey",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "637,630,437"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "34000",
                    "GeoName": "New Jersey",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "620,085,909"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "34000",
                    "GeoName": "New Jersey",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "682,945,922"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "35000",
                    "GeoName": "New Mexico",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "109,582,792"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "35000",
                    "GeoName": "New Mexico",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "98,789,953"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "35000",
                    "GeoName": "New Mexico",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "102,027,524"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "35000",
                    "GeoName": "New Mexico",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "97,268,016"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "35000",
                    "GeoName": "New Mexico",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "92,273,584"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "36000",
                    "GeoName": "New York",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,604,649,906"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "36000",
                    "GeoName": "New York",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,697,661,415"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "36000",
                    "GeoName": "New York",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,787,666,037"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "36000",
                    "GeoName": "New York",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,740,804,653"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "36000",
                    "GeoName": "New York",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,901,296,535"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "37000",
                    "GeoName": "North Carolina",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "662,120,757"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "37000",
                    "GeoName": "North Carolina",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "598,915,916"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "37000",
                    "GeoName": "North Carolina",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "594,520,997"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "37000",
                    "GeoName": "North Carolina",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "567,836,153"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "37000",
                    "GeoName": "North Carolina",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "548,522,131"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "38000",
                    "GeoName": "North Dakota",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "55,394,714"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "38000",
                    "GeoName": "North Dakota",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "59,248,678"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "38000",
                    "GeoName": "North Dakota",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "59,199,242"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "38000",
                    "GeoName": "North Dakota",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "63,559,623"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "38000",
                    "GeoName": "North Dakota",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "54,422,917"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "39000",
                    "GeoName": "Ohio",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "756,617,233"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "39000",
                    "GeoName": "Ohio",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "684,382,515"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "39000",
                    "GeoName": "Ohio",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "697,166,843"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "39000",
                    "GeoName": "Ohio",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "667,115,596"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "39000",
                    "GeoName": "Ohio",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "645,636,826"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "40000",
                    "GeoName": "Oklahoma",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "215,336,250"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "40000",
                    "GeoName": "Oklahoma",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "190,063,650"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "40000",
                    "GeoName": "Oklahoma",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "204,192,536"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "40000",
                    "GeoName": "Oklahoma",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "202,712,509"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "40000",
                    "GeoName": "Oklahoma",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "190,553,013"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "41000",
                    "GeoName": "Oregon",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "222,601,582"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "41000",
                    "GeoName": "Oregon",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "237,113,695"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "41000",
                    "GeoName": "Oregon",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "247,233,076"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "41000",
                    "GeoName": "Oregon",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "247,966,696"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "41000",
                    "GeoName": "Oregon",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "272,190,883"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "42000",
                    "GeoName": "Pennsylvania",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "844,496,474"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "42000",
                    "GeoName": "Pennsylvania",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "771,613,206"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "42000",
                    "GeoName": "Pennsylvania",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "799,888,848"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "42000",
                    "GeoName": "Pennsylvania",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "773,977,404"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "42000",
                    "GeoName": "Pennsylvania",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "746,440,960"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "44000",
                    "GeoName": "Rhode Island",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "58,084,984"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "44000",
                    "GeoName": "Rhode Island",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "59,290,780"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "44000",
                    "GeoName": "Rhode Island",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "61,642,824"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "44000",
                    "GeoName": "Rhode Island",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "60,770,647"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "44000",
                    "GeoName": "Rhode Island",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "66,570,874"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "45000",
                    "GeoName": "South Carolina",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "269,802,468"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "45000",
                    "GeoName": "South Carolina",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "245,359,471"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "45000",
                    "GeoName": "South Carolina",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "245,987,175"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "45000",
                    "GeoName": "South Carolina",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "233,251,426"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "45000",
                    "GeoName": "South Carolina",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "223,266,681"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "46000",
                    "GeoName": "South Dakota",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "50,232,488"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "46000",
                    "GeoName": "South Dakota",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "52,299,329"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "46000",
                    "GeoName": "South Dakota",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "54,001,302"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "46000",
                    "GeoName": "South Dakota",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "55,681,216"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "46000",
                    "GeoName": "South Dakota",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "61,684,689"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "47000",
                    "GeoName": "Tennessee",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "427,125,454"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "47000",
                    "GeoName": "Tennessee",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "379,007,099"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "47000",
                    "GeoName": "Tennessee",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "380,128,494"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "47000",
                    "GeoName": "Tennessee",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "363,055,457"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "47000",
                    "GeoName": "Tennessee",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "350,838,658"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "48000",
                    "GeoName": "Texas",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,673,234,322"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "48000",
                    "GeoName": "Texas",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,809,396,730"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "48000",
                    "GeoName": "Texas",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,858,757,760"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "48000",
                    "GeoName": "Texas",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,789,933,358"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "48000",
                    "GeoName": "Texas",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,051,768,556"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "49000",
                    "GeoName": "Utah",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "225,340,301"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "49000",
                    "GeoName": "Utah",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "202,133,408"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "49000",
                    "GeoName": "Utah",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "196,538,857"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "49000",
                    "GeoName": "Utah",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "184,457,474"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "49000",
                    "GeoName": "Utah",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "168,649,910"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "50000",
                    "GeoName": "Vermont",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "32,266,135"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "50000",
                    "GeoName": "Vermont",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "33,066,833"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "50000",
                    "GeoName": "Vermont",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "34,230,814"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "50000",
                    "GeoName": "Vermont",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "34,018,597"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "50000",
                    "GeoName": "Vermont",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "37,103,805"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "51000",
                    "GeoName": "Virginia",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "604,957,550"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "51000",
                    "GeoName": "Virginia",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "556,992,615"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "51000",
                    "GeoName": "Virginia",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "557,764,369"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "51000",
                    "GeoName": "Virginia",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "532,906,518"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "51000",
                    "GeoName": "Virginia",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "511,114,944"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "53000",
                    "GeoName": "Washington",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "519,409,583"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "53000",
                    "GeoName": "Washington",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "564,313,916"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "53000",
                    "GeoName": "Washington",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "595,231,822"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "53000",
                    "GeoName": "Washington",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "612,969,130"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "53000",
                    "GeoName": "Washington",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "677,489,451"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "54000",
                    "GeoName": "West Virginia",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "85,434,221"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "54000",
                    "GeoName": "West Virginia",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "76,547,916"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "54000",
                    "GeoName": "West Virginia",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "79,325,606"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "54000",
                    "GeoName": "West Virginia",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "79,192,890"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "54000",
                    "GeoName": "West Virginia",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "74,820,121"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "55000",
                    "GeoName": "Wisconsin",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "318,310,377"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "55000",
                    "GeoName": "Wisconsin",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "332,498,599"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "55000",
                    "GeoName": "Wisconsin",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "345,236,434"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "55000",
                    "GeoName": "Wisconsin",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "340,591,065"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "55000",
                    "GeoName": "Wisconsin",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "368,611,259"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "56000",
                    "GeoName": "Wyoming",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "41,510,213"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "56000",
                    "GeoName": "Wyoming",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "36,330,380"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "56000",
                    "GeoName": "Wyoming",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "39,428,044"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "56000",
                    "GeoName": "Wyoming",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "39,171,653"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "56000",
                    "GeoName": "Wyoming",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "36,980,650"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "91000",
                    "GeoName": "New England",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,035,653,904"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "91000",
                    "GeoName": "New England",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,084,681,788"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "91000",
                    "GeoName": "New England",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,130,342,871"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "91000",
                    "GeoName": "New England",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,115,240,521"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "91000",
                    "GeoName": "New England",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,221,038,597"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "92000",
                    "GeoName": "Mideast",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,107,499,370"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "92000",
                    "GeoName": "Mideast",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,763,973,403"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "92000",
                    "GeoName": "Mideast",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,866,471,092"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "92000",
                    "GeoName": "Mideast",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,708,448,403"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "92000",
                    "GeoName": "Mideast",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,540,214,893"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "93000",
                    "GeoName": "Great Lakes",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,643,592,017"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "93000",
                    "GeoName": "Great Lakes",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,758,717,135"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "93000",
                    "GeoName": "Great Lakes",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,845,292,640"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "93000",
                    "GeoName": "Great Lakes",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,775,803,307"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "93000",
                    "GeoName": "Great Lakes",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,056,083,317"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "94000",
                    "GeoName": "Plains",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,450,801,115"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "94000",
                    "GeoName": "Plains",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,326,312,941"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "94000",
                    "GeoName": "Plains",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,333,782,935"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "94000",
                    "GeoName": "Plains",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,292,587,802"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "94000",
                    "GeoName": "Plains",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "1,238,764,812"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "95000",
                    "GeoName": "Southeast",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,175,243,177"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "95000",
                    "GeoName": "Southeast",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,364,697,273"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "95000",
                    "GeoName": "Southeast",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,558,462,576"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "95000",
                    "GeoName": "Southeast",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,528,353,448"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "95000",
                    "GeoName": "Southeast",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "5,022,472,568"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "96000",
                    "GeoName": "Southwest",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,796,714,269"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "96000",
                    "GeoName": "Southwest",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,460,859,226"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "96000",
                    "GeoName": "Southwest",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,537,371,323"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "96000",
                    "GeoName": "Southwest",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,461,256,738"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "96000",
                    "GeoName": "Southwest",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "2,288,062,674"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "97000",
                    "GeoName": "Rocky Mountain",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "675,051,321"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "97000",
                    "GeoName": "Rocky Mountain",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "724,153,525"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "97000",
                    "GeoName": "Rocky Mountain",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "765,274,311"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "97000",
                    "GeoName": "Rocky Mountain",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "768,010,652"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "97000",
                    "GeoName": "Rocky Mountain",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "858,192,629"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "98000",
                    "GeoName": "Far West",
                    "TimePeriod": "2021",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,665,853,136"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "98000",
                    "GeoName": "Far West",
                    "TimePeriod": "2020",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,186,682,502"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "98000",
                    "GeoName": "Far West",
                    "TimePeriod": "2019",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,213,986,251"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "98000",
                    "GeoName": "Far West",
                    "TimePeriod": "2018",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "4,014,116,337"
                },
                {
                    "Code": "CAGDP2-1",
                    "GeoFips": "98000",
                    "GeoName": "Far West",
                    "TimePeriod": "2017",
                    "CL_UNIT": "Thousands of dollars",
                    "UNIT_MULT": "3",
                    "DataValue": "3,771,926,203"
                }
            ],
            "Notes": [
                {
                    "NoteRef": " ",
                    "NoteText": "Metropolitan Areas are defined (geographically delineated) by the Office of Management and Budget (OMB) bulletin no. 20-01 issued March 6, 2020."
                },
                {
                    "NoteRef": "*",
                    "NoteText": "For the All industry total and Government and government enterprises, the difference between the United States and Metropolitan and Nonmetropolitan portions reflects overseas activity, economic activity taking place outside the borders of the United States by the military and associated federal civilian support staff."
                },
                {
                    "NoteRef": " ",
                    "NoteText": "Last updated: December 8, 2022 -- new statistics for 2021, revised statistics for 2017-2020."
                }
            ]
        }
    }
}
