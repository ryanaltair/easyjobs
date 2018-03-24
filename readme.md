# easyjob - make job logs easy

## WORK IN PROGRESS

first we will fill readme ,then make a trello clone if we get readme done,
don't fork, it just a concept now. even the concept are WIP
but welcome **issue** for discuss.
NOTICE: everything changes without notice.

## tech stack
- json
- node.js
    - express
    - socketio
- mongodb
- bootstrap 4

## how easyjob make things easy 

### kanban style

to make things easy
use a Kanban style to collet jobs so it feels like a trello

so that's why we need a kanban like trello first

### default anywhere

- need a day, it should be today default,
- need assign to somebody, it should be ones on you hand, and self will be the first choice
- any logs should get a default already

### everything is json

### joblog
joblog is where we keep one job content,
and it is json itself, so easy to input, output and refactor

### jobrule

jobrule is a add-on, as a template defined how to log joblog's content like who and when, where and how,
and  jobrule is written in json,
so that's easy to make and reuse add-ons

### jobhook
webhook which do automates is json itself too, will add and update joblog autoly

## how to use

just easy log you job, quick as it can
so we need a quicklog button on the nav 
and a job logs panel to check you jobs 


## structure 

### main
the top of the easyjobs are the projects, just like a repo in git,
then it should be the jobs, just like data in SQL, it feels like the file in you git repo,
one projects contains many jobs, jobs will keep as single json
every jobs owns tags, and one must-known tag is lane tag,
which will tell us which lane we put this jobs out


### jobs 
jobs are json, so things get easy

```json
var jobsample = {
"name"="hello-world",
"lane-tag"="progress",
"owner"="ryan",
"create-time"="not-today",
"msg"="jobs logs easy",
"display"=true
}
```



## view 

-nav---show-where-you-are--
|lane| |lane| |lane| |lane|
|||||| |||||| |||||| ||||||
|||||| |||||| |||||| ||||||




