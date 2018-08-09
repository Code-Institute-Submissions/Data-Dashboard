Planning:

  

To start my planning off, i thought it would be a good idea to take a look at other data dashboard to therefore see what is included in a data dashboard and to get the feel for it. For an example whether or not they used a nav bar, what type and how many charts were on the different pages if they had included multiple pages because some just used one continuous page. 



Once I had taken a look at the different data dashboards I decided to plan out my data dashboard using an online mockup service, here I decided that i would include a nav bar but a fixed nav because i was going to have one continuous page for my data dashboard. By using a fixed nav bar i was going to include links to the different parts of the data dashboard therefore making it easy for the user to navigate the page. i wasn't sure how many parts i would have because i didn't know how many charts i could make from my chosen data set but this didn't matter because each page would follow the same format. This was the heading first, titling what this part was all about, next would be the charts,graphs and etc, then this would be followed by a description of some sort explaining what the data shows. From the advice video on Code institute, i decided to use a bootstrap theme from:

https://bootswatch.com/3/



In some of my researched data dashboard, i had seen that some of the different charts interactive with each other, this was something i wanted to cooperate into my work and because of this understood that i would need a reset button so that the user could reset the graphs. This button would be on the fixed nav bar for ease of use for the user.



Next on the agenda was to find a suitable data set, so i had to find one which had a file size less than or equal to because this was what cloud 9 only allowed to download and the file type needed to be CSV. I wasn't sure how i was going to do this so i asked around on slack and some mentioned a website called kaggle. So i used kaggle to find a suitable data set and i decided to use a data set on towed vehicles in Chicago as my final choice, here the link to the data set :

https://www.kaggle.com/chicago/chicago-towed-vehicles



Finally with the data set chosen, i decided to plan out was kind of charts and graphs i could create with the data at hand and note this down mentally. To be honest i went through lots of data set trying to plan out what kind of charts i could make and most were very limiting or if i did find a good one the file size was too big.





Technologies Used:



This is where i prepared my workspace on cloud 9 for the project. So i first created a folder to hold my data set, next was a folder to hold sub folders css and JavaScript which then would hold their respective files, then i had a folder to hold text files such as my README and finally my index.html file.



Next it was time to upload the important data, files and bootstrap. Firstly i uploaded my CSV data set file to my data folder. Secondly i uploaded my bootstrap to the CSS folder using wget and i did the same for dc.min.css file. Next i used wget to upload the crossfilter, d3, dc and queue files to my JavaScript folder, these important files would be used to bring my data dashboard to life. Finally i added a graph.js file to the JavaScript folder and this is where i would code my different graphs and etc.



After this i linked or scripted all these uploaded files to the index.html and now it was time to start creating graphs.



At this point i knew i would have a few section filled with different graphs and so on, so i first created all my graphs then decided to arrange them and refine them after. The first graph i created was a bar chart which showed the number of cars towed for each make, this was simple enough but i decided to add a discipline selector which would factor in the colour of the car aswell, this links back to where i said i wanted to create an interactive data dashboard. 



The next chart was a stacked bar chart, this was to show that i could further than just a normal bar chart. This chart showed the different styles towed for example 4 or 2 door cars. After this i coded a percentage gauge would display the percentage of 4 doors towed in two different states and i did this another two more time for the other two styles. 



The final bar chart was a chart which displayed the number of cars towed to different towed addresses and the final data chart was a pie chart because i wanted to add some diversity in the charts. This chart showed the number cars towed for each colour. For both of these charts you can click the different parts and it will have an impact on the different charts and the percentage gauge so like i wanted.



Once this was done it was time to organize the different charts and etc into sections, then adding a title to the top of each chart and percentage gauges. Then adding a description to the bottom of each section to give some details on each section. 



Now i needed to add navigation to my dashboard, so i used the bootstrap nav bar and adapted it to suit the dashboard. On the far left of the nav bar is the title of the dashboard which will take the user back to the top, next i included three titles on for each section and linked them to each data section. But now i needed to create a fixed nav bar, with some research and some javascript i managed to do this, this meant the user could use each section easily enough with the fixed nav bar. I used this video and the code at the end to achieve the nav bar:

https://www.youtube.com/watch?v=pzKypBAMD60



I also worked out that i needed to reset the graphs once the user had played around with them, i was unsure on how to do this and struggled to find any mention of this on the internet to i asked a tutor from code institute call nakita, she provided a snippet of code on how to do this and i adapted it to suit my dashboard. because my nav bar what going to be fixed i decided to add the reset button to the nav bar so the user could access it at all times.



Finally i styled the dashboard adding padding and font-sizes to aid in the flow of the dashboard and the ease of use for the user. I also removed the x-axis labels on my graphs because they collided and the user would be unable to read them, but you may be like how can the user know what the data is but by hovering over the bars or data it pops up telling the user the data name and the number.



The purpose of a data dashboard is to provide readable, suitable and relevant data about the chosen data set, i feel like I've achieved this because on the data dashboard you can see all the different specification about the cars being towed, and how the way one specific data entry can have an impact on the dashboard then provide accurate data on that entry, is what i was going for. There were certain entries in the data set that i left out and this was because i was not able to use that data in any time of graph or it wasn't important and didn't have no overall impact on the dashboard. 



Testing:



First i went through the simple testing procedures, which were checking the links worked and they did but at first the links didn't take the user to the precise part of the page i wanted. So after playing around with it i got what i wanted. Next was checking if the reset button worked with all graphs, so after trying numerous processes, it consistently worked. Next was checking the graphs, selector and legends worked and that they changed the data of the other graphs and indeed they did with ease and no delay. 



Also testing whether things such as text and so on was readable, then adjusting it to meet this requirement.













