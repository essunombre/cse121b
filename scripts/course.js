// course.js

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    },
    init: function(){
      setCourseInfo(this);
      renderSections(this.sections);
    },
};
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode"); // Corrected to match HTML
    courseName.textContent = course.name;
    courseCode.textContent = course.code; // Corrected to match HTML
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    ).join(""); // Joined the array of HTML strings
    document.querySelector("#sections").innerHTML = html;
  }
  
  export default aCourse;