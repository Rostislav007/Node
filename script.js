var fs = require("fs");
fs.appendFileSync("text.txt", "Привет мир");
fs.appendFile("text.txt", "Пока мир", function(error){
                if(error) throw error;
                console.log("Запись файла завершена. Содержимое файла:");
                var data = fs.readFileSync("text.txt", "utf8");
                console.log(data);  
});