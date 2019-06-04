## command to run the project
1) npm i
2) node index.js

## Algorithm Explanation :
* First I downloaded the google sheet in .csv file. With the help of npm(csvtojson) I converted the csv data into json format, so it becomes easy to operate.
* I fixed the threshold value to increase the happiness. i.e If the writer post exceeeds 5 time tale then their story will publish one more time as compare to other writer but this will increase happyness to only more published writer and not to other writer. It consume other writer tale occurance and decreasing overall happyness percent.
* I tried to provide maximum chance to all user so their happyness is more.
* If the story is not published within 1 month of all writer .i.e. 30*10=300 story limit . If story count is >300 . THen It remaining story will publish to next month. so like first come first serve of last month. If previous month story will publish then we will mmove to current month story and so on.
* By the we get the number of unique writer i.e 75
* Limit is 10 story per day. But I tried to give 1 chance to all user.
* My total  calculated happyness percent is 83%.
* Happyness percent is calculated by number of published tales divided by total tales witten by writer *100.
* Unhappy percent is calculated by (100% - happy %).
