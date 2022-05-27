/*for(var i=0;i<6;i++)
    {
        setTimeout(function(){
            console.log(i);
        },i*1000);
    } */

const course = {
  name: "javascript",
  id: 1,
};

const newCourse = {...course};//if use only object it will give 2 if use object of values or ,uliple values it give one value 1

newCourse.id = 2;

console.log(course.id);
