let School = new Object();

School = {
  subjects: {
    subject1: "math",
    subject2: "history",
    subject3: "geography",
  },
  students: [
    {
      first: [
        {
          name: "Martha",
          favoriteSubject: "geography",
        },
      ],
    },
    {
      second: [
        {
          name: "John",
          favoriteSubject: "math",
        },
      ],
    },
  ],

  showSubjects() {
    console.log(this.subjects.subject1);
    console.log(this.subjects.subject2);
    console.log(this.subjects.subject3);
  },

  getStudentsFavSubjects() {
    console.log(
      "Favorite subject of " +
        this.students[0].first[0].name +
        " is " +
        this.students[0].first[0].favoriteSubject,
    );
    console.log(
      "Favorite subject of " +
        this.students[1].second[0].name +
        " is " +
        this.students[1].second[0].favoriteSubject,
    );
  },
};

School.showSubjects();
School.getStudentsFavSubjects();
