const csvFilePath = './data.csv';
const csv = require('csvtojson');
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        const threshold = 6;
        const publishListArray = new Array(30).fill(0);
        const writers = [];
        const storyOfEachWriter = {};
        const detailPublished = {};

        function TotalHappyness() {
            let actualHappyness = 0;
            const keysArray = Object.keys(detailPublished)
            keysArray.map(d => actualHappyness += detailPublished[d].happyPercent);
            // console.log("Act tot",actualHappyness,totalHappyness)
            return Math.ceil(actualHappyness / totalHappyness);
        }
        for (let i = 0; i < jsonObj.length; i++) {
            initStories(jsonObj[i].writer_id, jsonObj[i].tale_id);
        }
        function initStories(key, val) {
            if (!storyOfEachWriter[key]) {
                storyOfEachWriter[key] = {} = { story: [val], total: 1 };
                detailPublished[key] = {} = { no_of_publish: 0, happyPercent: 0, publish_days: [] };
                writers.push(key);

            } else {
                storyOfEachWriter[key].story.push(val);
                storyOfEachWriter[key].total += 1;
            }
        }
        const totalHappyness = writers.length;
        // console.log("ttal happy",totalHappyness)
        Published();
        function Published() {
            let day = 1;
            let currentWriterIndex = 0;
             while (day <= 30 && writers.length > 0) {
                const writerId = (writers[currentWriterIndex]) + '';
               if (storyOfEachWriter[writerId]) {
                    detailPublished[writerId].no_of_publish += 1;                    
                    detailPublished[writerId].happyPercent = (detailPublished[writerId].no_of_publish / storyOfEachWriter[writerId].total) * 100;
                    storyOfEachWriter[writerId].story.pop();             
                     if (publishListArray[day - 1] < 10) {
                        publishListArray[day - 1] += 1;
                    } else {
                        day += 1;
                        publishListArray[day - 1] += 1;
                    }
                    detailPublished[writerId].publish_days.push(day);
                    if (!storyOfEachWriter[writerId].story.length) {
                        delete storyOfEachWriter[writerId];
                        writers.splice(currentWriterIndex, 1);
                        if (currentWriterIndex >= writers.length - 1) {
                            currentWriterIndex = 0;
                        }
                    } else {
                        currentWriterIndex += 1;
                    }                    
                } else {
                    writers.splice(currentWriterIndex, 1);
                    if (currentWriterIndex >= writers.length - 1) currentWriterIndex = 0;
                }
            }
        }
        console.log('Happyness of each writers: ', detailPublished);
        console.log('Total Happyness Percent % : ', TotalHappyness());
        console.log('Unhappy percent % : ', 100 - TotalHappyness());
    })
