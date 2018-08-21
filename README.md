Chicago Towed Vechicles Data Dashboard

UX:

The purpose of this project is to provide relevent information on the statistics of the number of cars towed in Chicago, but not just that, but the different colour, make, style and model of cars towed. The data dashboard will allow the user to interactive with all elements on the page to adjust and narrow dowm certain statistics for their research or just their ineterest. I think the fact that all data charts and so on, will interact with each other is very key because it makes the data more diverse, insetad of the usual fixed graph that can't be changed. So this means the user can get certain numbers for certain entries, or they can just get an overview by not using the interactivity of the charts, it all up to the user how they use it but i have gave them all the options.

link for mockup:
https://app.moqups.com/solomonj2k12@hotmail.co.uk/LYdLOgve03/view

as you can see in the mockup, i was going for something simple and a simple pattern across each section and i wanted this because when using charts, there is no need to make the layout difficult to understand when this can have an impact on understanding what the data elements stand for, so by having a simple layout this meant the user knew what chart was what.


Features;

feature 1: fixed nav bar this meant the user can access all the different section at all times

feature 2: reset button, this mean the user can reset the data anytime if the data was not showing what they wanted.

feature 3 : ineractive data elements, so the user can broading their knowledge and reseach in this data set.

feature 4 : mobile compatibility, so enough mobile compatibility that the user can use the dashboard on mobile however is still better on desktop for obvious reasons.

feature to impleament in the furture:

feature 1: a request forum, so the user can request certain charts to be added to the dashboard




Planning:



  



To start my planning off, i thought it would be a good idea to take a look at other data dashboard to therefore see what is included in a data dashboard and to get the feel for it. For an example whether or not they used a nav bar, what type and how many charts were on the different pages if they had included multiple pages because some just used one continuous page. 







Once I had taken a look at the different data dashboards I decided to plan out my data dashboard using an online mockup service, here I decided that i would include a nav bar but a fixed nav because i was going to have one continuous page for my data dashboard. By using a fixed nav bar i was going to include links to the different parts of the data dashboard therefore making it easy for the user to navigate the page. i wasn't sure how many parts i would have because i didn't know how many charts i could make from my chosen data set but this didn't matter because each page would follow the same format. This was the heading first, titling what this part was all about, next would be the charts,graphs and etc, then this would be followed by a description of some sort explaining what the data shows. From the advice video on Code Institute, I decided to use a bootstrap theme from:



https://bootswatch.com/3/







In some of my researched data dashboard, i had seen that some of the different charts interactive with each other, this was something i wanted to cooperate into my work and because of this understood that i would need a reset button so that the user could reset the graphs. This button would be on the fixed nav bar for ease of use for the user.







Next on the agenda was to find a suitable data set, so i had to find one which had a file size less than or equal to because this was what cloud 9 only allowed to download and the file type needed to be CSV. I wasn't sure how i was going to do this so i asked around on slack and some mentioned a website called kaggle. So i used kaggle to find a suitable data set and i decided to use a data set on towed vehicles in Chicago as my final choice, here the link to the data set :



https://www.kaggle.com/chicago/chicago-towed-vehicles







Finally with the data set chosen, I decided to plan out was kind of charts and graphs I could create with the data at hand and note this down mentally. To be honest I went through lots of data set trying to plan out what kind of charts I could make and most were very limiting or if I did find a good one the file size was too big.











Technologies Used:







This is where I prepared my workspace on cloud 9 for the project. So I first created a folder to hold my data set, next was a folder to hold sub folders css and JavaScript which then would hold their respective files, then I had a folder to hold text files such as my README and finally my index.html file.







Next it was time to upload the important data, files and bootstrap. Firstly I uploaded my CSV data set file to my data folder. Secondly i uploaded my bootstrap to the CSS folder using wget and I did the same for dc.min.css file. Next I used wget to upload the crossfilter, d3, dc and queue files to my JavaScript folder, these important files would be used to bring my data dashboard to life. Finally I added a graph.js file to the JavaScript folder and this is where I would code my different graphs and etc.







After this I linked or scripted all these uploaded files to the index.html and now it was time to start creating graphs.







At this point i knew i would have a few section filled with different graphs and so on, so i first created all my graphs then decided to arrange them and refine them after. The first graph i created was a bar chart which showed the number of cars towed for each make, this was simple enough but i decided to add a discipline selector which would factor in the colour of the car aswell, this links back to where i said i wanted to create an interactive data dashboard. 







The next chart was a stacked bar chart, this was to show that i could further than just a normal bar chart. This chart showed the different styles towed for example 4 or 2 door cars. After this i coded a percentage gauge would display the percentage of 4 doors towed in two different states and i did this another two more time for the other two styles. 







The final bar chart was a chart which displayed the number of cars towed to different towed addresses and the final data chart was a pie chart because i wanted to add some diversity in the charts. This chart showed the number cars towed for each colour. For both of these charts you can click the different parts and it will have an impact on the different charts and the percentage gauge so like i wanted.







Once this was done it was time to organize the different charts and etc into sections, then adding a title to the top of each chart and percentage gauges. Then adding a description to the bottom of each section to give some details on each section. 







Now i needed to add navigation to my dashboard, so i used the bootstrap nav bar and adapted it to suit the dashboard. On the far left of the nav bar is the title of the dashboard which will take the user back to the top, next i included three titles on for each section and linked them to each data section. But now i needed to create a fixed nav bar, using the bootstrap i had imported i managed to achieve this, just needed to add my own personal touch.







I also worked out that i needed to reset the graphs once the user had played around with them, so i added a button which would complete this task. because my nav bar what going to be fixed i decided to add the reset button to the nav bar so the user could access it at all times.







Finally i styled the dashboard adding padding and font-sizes to aid in the flow of the dashboard and the ease of use for the user. I also removed the x-axis labels on my graphs because they collided and the user would be unable to read them, but you may be like how can the user know what the data is but by hovering over the bars or data it pops up telling the user the data name and the number.







The purpose of a data dashboard is to provide readable, suitable and relevant data about the chosen data set, i feel like I've achieved this because on the data dashboard you can see all the different specification about the cars being towed, and how the way one specific data entry can have an impact on the dashboard then provide accurate data on that entry, is what i was going for. There were certain entries in the data set that i left out and this was because i was not able to use that data in any time of graph or it wasn't important and didn't have no overall impact on the dashboard. 







Testing:







First i went through the simple testing procedures, which were checking the links worked and they did but at first the links didn't take the user to the precise part of the page i wanted. So after playing around with it i got what i wanted. Next was checking if the reset button worked with all graphs, so after trying numerous processes, it consistently worked. Next was checking the graphs, selector and legends worked and that they changed the data of the other graphs and indeed they did with ease and no delay. one issue there is, is that in my selector there is a ":17" option and i wasn't sure what it is, it's either an other option or its an error in the dataset. 





Also testing whether things such as text and so on was readable, then adjusting it to meet this requirement.



Next was mobile testing, so i did the same tests as i did for the desktop version and everything was fine apart from my navbar. So i created a new single nav bar instead of the two individual ones, this new nav bar fixed scrolling feature then work for both desktop and mobile and had a more professional vibe to it. There were also some other mobile changes such as i found tooltip hover doesn't work on mobile so i need another way so the user knew what car make they were looking at, so i created a in order list of the car makes which relates to the charts. so the user can see what data they are looking at.screens and followed the same process to make it a fixed nav bar, it didn't work at first but after some playing around with it, it finally started to work. there were also some other mobile changes such as i found tooltip hover doesn't work on mobile so i need another way so the user knew what car make they were looking at, so i created a in order list of the car makes which relates to the charts. so the user can see what data they are looking at. To solidate my checks i loaded the github pages to my phone and ipad, because i know sometimes the emulator doesn't always work, and from using my phone and ipad, i could see all was working fine.



finally there is browser tesing i used http://browsershots.org/ to help me test my data dashboard against different browsers. The results werefinally there is browser tesing i used http://browsershots.org/ to help me test my data dashboard against different browsers. The results were that the data dashboard works fine on all main and up to date version of the different browsers.


Deployment:

Hosting the website is very simple with git hub because they have a feature called github pages, which will deploy the code you have commited to github, into a fully working website. All you have to do is make sure you have your lastest version of code committed, then go to settings, scroll down to github pages and underneath source there is a dropdown menu, click on master branch and the click save. This will deploy the code into website, give it some time to load otherwise you might get a 404 then click on the click provided to view your website.

Heres a link to my webiste so anyone can view it.

https://solomonj2k12.github.io/Data-Dashboard/

however if someone wanted to create a copy of my code, they will need to install certain things to get the bootstrap and charts to work. So to do this the user will need to do a wget in the terminal for each link left below:

bootstrap:
https://bootswatch.com/3/cerulean/bootstrap.min.css

JS:
https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js
https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js
https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js
https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js

CSS:
https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.css

so once installed the page will be fully functional 




















