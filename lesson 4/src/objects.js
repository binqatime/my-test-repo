let School = new Object();

School = {
    subjects: {
        subject1: 'math',
        subject2: 'history',
        subject3: 'geography'
    },
    students: {
        first: {
            name: 'Martha',
            favoriteSubject: 'geography'
        },
        second: {
            name: 'John',
            favoriteSubject: 'math'
        }
    },
    showSubjects() {
        console.log(this.subjects.subject1);
        console.log(this.subjects.subject2);
        console.log(this.subjects.subject3);
    },
    getStudentsFavSubjects() {
        console.log('Favorite subject of ' + this.students.first.name + ' is ' + this.students.first.favoriteSubject);
        console.log('Favorite subject of ' + this.students.second.name + ' is ' + this.students.second.favoriteSubject);
    }

};

School.showSubjects();
School.getStudentsFavSubjects();


