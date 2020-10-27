sortedClassrooms = sortedClassrooms.sort((a, b)=>{
       if (a.classroom.assessmentConfig < b.teacherIds.length)
         return -1;
       if (a.classroom.assessmentConfig > b.teacherIds.length)
         return 1;
       return 0;
     })
