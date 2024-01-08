const express = require('express')
const app = express()
const {items,announcements,members} = require('./data.js')
const database = require('./database.js')
const methodOverride = require('method-override');

const val=[news,items,announcements,members]
app.use(express.static('./views'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.set('view engine','ejs')



app.get('/',(req,res)=>{
    res.render('news',val)
})




app.get('/ad',(req,res)=>{
    res.render('ad-news',val)
})

app.get('/add',(req,res)=>{
    res.render('add')
})

app.get('/news/:id', (req, res) => {
    let foundNews = null;

    news.forEach(element => {
        if (element.id == req.params.id) {
            foundNews = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundNews) {
        res.render('single-news', foundNews);
    } else {
        // Handle case when news with the specified ID is not found
        res.status(404).send('News not found');
    }
});





app.get('/announcements/:id', (req, res) => {
    let foundAnnouncement = null;

    announcements.forEach(element => {
        if (element.id == req.params.id) {
            foundAnnouncement = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundAnnouncement) {
        res.render('single-announcement', foundAnnouncement);
    } else {
        // Handle case when news with the specified ID is not found
        res.status(404).send('News not found');
    }
});

app.get('/news/delete/:id',(req,res)=>{
    let foundNews = null;

    news.forEach(element => {
        if (element.id == req.params.id) {
            foundNews = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundNews) {
        res.render('deleteNews', foundNews);
    } else {
        // Handle case when news with the specified ID is not found
        res.status(404).send('News not found');
    }
});

app.get('/announcements/delete/:id',(req,res)=>{
    let foundAnnouncement = null;

    news.forEach(element => {
        if (element.id == req.params.id) {
            foundAnnouncement = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundAnnouncement) {
        res.render('deleteAnnouncement', foundAnnouncement);
    } else {
        // Handle case when news with the specified ID is not found
        res.status(404).send('Announcement not found');
    }
});

app.post('/announcements/:id', (req, res) => {
    let foundAnnouncement = null;

    announcements.forEach(element => {
        if (element.id == req.params.id) {
            foundAnnouncement = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundAnnouncement) {
        // Check if req.body contains the 'description' property
        if (req.body && req.body.description) {
            // Update the 'description' property
            foundAnnouncement.desc = req.body.description;

            // Send a response to the client indicating a successful update
            res.status(200).send('Announcement updated successfully');
            console.log(foundAnnouncement)
        } else {
            // Handle case when 'description' property is missing in req.body
            res.status(400).send('Bad Request: Missing description in request body');
        }
    } else {
        // Handle case when announcement with the specified ID is not found
        res.status(404).send('Announcement not found');
    }
});

app.post('/news/:id', (req, res) => {
    let foundNews = null;

    news.forEach(element => {
        if (element.id == req.params.id) {
            foundNews = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundNews) {
        // Check if req.body contains the 'description' property
        if (req.body && req.body.title && req.body.author && req.body.date && req.body.authorImg && req.body.all && req.body.description ) {
            // Update the 'description' property
            foundNews.desc = req.body.description;
            foundNews.title = req.body.title;
            foundNews.imgurl = req.body.image,
            foundNews.author = req.body.author,
            foundNews.date = req.body.date,
            foundNews.authorImg = req.body.authorImg,
            foundNews.all = req.body.all

            // Send a response to the client indicating a successful update
            res.status(200).send('News updated successfully');
        } else {
            // Handle case when 'description' property is missing in req.body
            res.status(400).send('Bad Request: Missing description in request body');
        }
    } else {
        // Handle case when announcement with the specified ID is not found
        res.status(404).send('News not found');
    }
});



app.post("/announcements/delete/:id/del",(req,res)=>{
    let foundAnnouncement = null;
    announcements.forEach(element => {
        if (element.id == req.params.id) {
            foundAnnouncement = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundAnnouncement) {
        let idx = announcements.indexOf(foundAnnouncement);
        announcements.splice(idx, 1)
        res.send("You succesfully deleted the announcement")
    } else {
        // Handle case when news with the specified ID is not found
        res.status(404).send('Announcement not found');
    }
})

app.post("/news/delete/:id/del",(req,res)=>{
    let foundNews = null;
    news.forEach(element => {
        if (element.id == req.params.id) {
            foundNews = element;
            return; // Exit the loop once a match is found
        }
    });

    if (foundNews) {
        let idx = news.indexOf(foundNews);
        news.splice(idx, 1)
        res.send("You succesfully deleted the news")
    } else {
        // Handle case when news with the specified ID is not found
        res.status(404).send('news not found');
    }
})



// app.post('/addMember',(req,res)=>{
//     try{
//         if (!req.body.description){
//             res.send('There is description missing requirement')  
//         } 
        
//         else if(!req.body.image){
//             res.send('There is Image missing requirement')
//         }
        
//         else if(!req.body.name){
//             res.send('There is name missing requirement')
//         }
        
//         else{
//             members.push({
//                 imgurl: req.body.image,
//                 name: req.body.name,
//                 des: req.body.description
//             })
//             res.send('<h2>You added the member news succesfully</h2>')
//             console.log(members)
//         }
        
//     }
//     catch(e){
//         console.log(e)
//         res.send('<h2>Adding Member is not accomplished</h2>')
//     }
    
// })
app.post('/addAnnounce',(req,res)=>{
    try{
        if (req.body.description){
            announcements.push({
                desc: req.body.description
            })
            res.send('<h2>You added the Announcement succesfully</h2>')
            console.log(announcements)
        }
        else{
            res.send('There is Some missing requirement')
        }
    }
    catch(e){
        console.log(e)
        res.send('<h2>Adding announcement is not accomplished</h2>')
    }
    
})
// app.post('/addItem',(req,res)=>{
//     try{
//         if (!req.body.description){
//             res.send('There is description missing requirement')  
//         } 
        
//         else if(!req.body.image){
//             res.send('There is Image missing requirement')
//         }
       
        
//         else{}
//             items.push({
//                 imgurl: req.body.image,
//                 desc: req.body.description
//             })
//             res.send('<h2>You added the items news succesfully</h2>')
//             console.log(items)
//         }
        
    
//     catch(e){
//         console.log(e)
//         res.send('<h2>Adding items is not accomplished</h2>')
//     }
    
// })
app.post('/addNews',(req,res)=>{
    try{
        if (!req.body.description){
            res.send('There is description missing requirement')  
        } 
        else if(!req.body.title){
            res.send('There is Tile missing requirement')
        } 
        else if(!req.body.image){
            res.send('There is Image missing requirement')
        }
        else if(!req.body.author){
            res.send('There is author missing requirement')
        } 
        else if(!req.body.date){
            res.send('There is date missing requirement')
        }
        else if(!req.body.authorImg){
            res.send('There is auimg missing requirement')
        } 
        else if(!req.body.all){
            res.send('There is all missing requirement')
        }

        else{
            news.push({
                imgurl: req.body.image,
                title: req.body.title,
                author: req.body.author,
                date: req.body.date,
                desc: req.body.description,
                authorImg: req.body.authorImg,
                all: req.body.all
            })
            res.send('<h2>You added the news succesfully</h2>')
            console.log(news)
        }
        
        
    }
    catch(e){
        console.log(e)
        res.send('<h2>Adding News is not accomplished</h2>')
    }
    
})

// app.post('/addNews', (req, res) => {
//     // Extract data from the POST request
//     const add = req.body;
  
//     // Define your MySQL query
   
  
//     // Execute the query with the extracted data using the database module
//     database.query(`INSERT INTO news (imageurl,title,author,date,authorimg,description,all_content) VALUES (${req.body.image},${req.body.title}, ${req.body.author}, ${req.body.authorImg}, ${req.body.description},${req.body.all} )`, (err, results) => {

//     });
//   });
app.listen(3000)