export const data = {
    notifications: [
        { 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            date: '2022-01-01', 
            read: false 
        },
        { 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            date: '2022-01-01', 
            read: false 
        },
        { 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            date: '2022-01-01', 
            read: true 
        },
        { 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            date: '2022-01-01', 
            read: false 
        },
        { 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            date: '2022-01-01', 
            read: false 
        },
    ],
};

export const MENU = [
    {
        type: 'student',
        items: [
            { 
                label: 'Home', 
                path: '/student/dashboard'
            },
            { 
                label: 'Previous Tests', 
                path: '/student/tests'
            },
            { 
                label: 'Results', 
                path: '/student/results'
            },
        ]
    },
    {
        type: 'teacher',
        items: [
            { 
                label: 'Home', 
                path: '/teacher/dashboard'
            },
            { 
                label: 'Tests created', 
                path: '/teacher/tests'
            },
            { 
                label: 'Results', 
                path: '/teacher/results'
            },
            {
                label: 'Subjects',
                path: '/teacher/subjects'
            },
            {
                label: 'Question bank',
                path: '/teacher/questions'
            }
        ]
    },
    {
        type: 'admin',
        items: [
            { 
                label: 'Home', 
                path: '/admin/dashboard'
            },
            {
                label: 'Students',
                path: '/admin/students'
            },
            {
                label: 'Teachers',
                path: '/admin/teachers'
            },
            {
                label: 'Subjects',
                path: '/admin/subjects'
            },
            {
                label: 'Tests',
                path: '/admin/tests'
            },
            {
                label: 'Results',
                path: '/admin/results'
            },
            {
                label: 'Question bank',
                path: '/admin/questions'
            }
        ]
    }
]