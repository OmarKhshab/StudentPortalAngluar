import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const students = [
            {
                id: 11,
                name: 'Omar',
                imgsrc: 'https://www.utsa.edu/today/images/students/paulmartinez.jpg',
                gpa : 4.0
            },
            {
                id: 12,
                name: 'Ashraf',
                imgsrc: 'https://www.buffalo.edu/content/dam/www/news/photos/2013/01/Justin-Kimber.jpg',
                gpa: 3.9
            },
            {
                id: 13,
                name: 'Ahmed',
                imgsrc: 'https://s.hdnux.com/photos/76/50/23/16417987/5/920x920.jpg',
                gpa: 3.8
            },
            {
                id: 14,
                name: 'Mostafa',
                imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtApkBYxCQ7Mu8Jrb3WoaP_GUnGbjQa4WR5furZLae1Wny-YVw',
                gpa: 3.7
            },
            {
                id: 15,
                name: 'Hassan',
                imgsrc: 'https://equityinlearning.act.org/wp-content/uploads/2018/08/AlexCasillas_table-retouched2-225x300.jpeg',
                gpa: 3.6
            },
            {
                id: 16,
                name: 'Nouran',
                imgsrc: 'https://www.nwselfstorage.com/wp-content/uploads/2013/10/2-post_college-student-storage-2.png',
                gpa: 3.5
            },
            {
                id: 17,
                name: 'Dalia',
                imgsrc: 'https://teenlife.blogs.pressdemocrat.com/files/2010/09/codding.jpg',
                gpa: 3.4
            },
            {
                id: 18,
                name: 'Alaa',
                imgsrc: 'data:image/jpeg;base64,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',
                gpa: 3.3
            },
            {
                id: 19,
                name: 'Nada',
                imgsrc: 'https://media.istockphoto.com/photos/portrait-of-an-attractive-confident-female-college-student-picture-id185283958',
                gpa: 3.2
            },
            {
                id: 20,
                name: 'Nour',
                imgsrc: 'https://www.lasencinashospital.com/sites/default/files/Student-Wellness-page.jpg',
                gpa: 3.1
            }
        ];
        return { students };
    }
}