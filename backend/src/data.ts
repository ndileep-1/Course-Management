// export const courses:any[]=
//     [
//         {
//           "id": 1,
//           "name": "Introduction to Programming",
//           "instructor": "John Smith",
//           "tags": ["programming", "beginner", "coding"],
//           "description": "Learn the fundamentals of programming and how to write code.",
//           "topics": [
//             "Variables and data types",
//             "Input and output",
//             "Conditional statements",
//             "Loops",
//             "Functions",
//             "Arrays and lists",
//             "Strings",
//             "File handling",
//             "Exception handling",
//             "Object-oriented programming",
//             "Recursion"
//         ],
//         "imageurl":"https://images.app.goo.gl/PNHdbPkCs6KEnwAj7"

import { course } from "./models/course.model";

        
//         },
//         {
//           "id": 2,
//           "name": "Web Development",
//           "instructor": "Jane Doe",
//           "tags": ["web development", "HTML", "CSS", "JavaScript"],
//           "description": "Build interactive and responsive websites using HTML, CSS, and JavaScript.",
//           "topics":[
//           "HTML (Hypertext Markup Language)",
//           "CSS (Cascading Style Sheets)",
//           "JavaScript",
//           "Responsive Web Design",
//           "Front-end Frameworks (e.g., Bootstrap)",
//           "Backend Development (e.g., Node.js, Django, Ruby on Rails)",
//           "Databases (e.g., SQL, MongoDB)",
//           "APIs (Application Programming Interfaces)"
//         ],
//         "imageurl":"https://images.app.goo.gl/9ognc61eamAvc2uCA"
//         },
//         {
//           "id": 3,
//           "name": "Data Science with Python",
//           "instructor": "David Johnson",
//           "tags": ["data science", "python", "machine learning"],
//           "description": "Explore data analysis, visualization, and machine learning using Python.",
//           "topics":[  
//             "Introduction to Data Science",  "Python Programming Fundamentals",  
//             "Data Manipulation and Analysis with Pandas", 
//              "Data Visualization with Matplotlib and Seaborn", 
//               "Exploratory Data Analysis (EDA)",  
//               "Statistical Concepts for Data Science",  "Machine Learning Basics",  
//               "Supervised Learning Algorithms (Regression, Classification)",  
//               "Unsupervised Learning Algorithms (Clustering, Dimensionality Reduction)", 
//                "Model Evaluation and Validation",  "Feature Engineering and Selection",  
//                "Natural Language Processing (NLP)",  "Time Series Analysis",  
//                "Deep Learning with Python (Neural Networks)",  "Big Data and Distributed Computing (Hadoop, Spark)", 
//                 "Model Deployment and Productionization"
//             ],
//             "imageurl":"https://images.app.goo.gl/CJCyJ3gniSJHpvoR8"

//         },
//         {
//           "id": 4,
//           "name": "Mobile App Development",
//           "instructor": "Emily Wilson",
//           "tags": ["mobile", "app development", "iOS", "Android"],
//           "description": "Create mobile applications for iOS and Android platforms.",
//           "topics" : [
//             "Introduction to Mobile App Development",
//             "Mobile App Development Platforms",
//             "User Interface Design for Mobile Apps",
//             "Mobile App Development Lifecycle",
//             "Mobile App Architecture",
//             "Programming Languages for Mobile Apps",
//             "Mobile App Frameworks and Libraries",
//             "Database Integration in Mobile Apps",
//             "Mobile App Security",
//             "Mobile App Testing and Debugging",
//             "Mobile App Deployment and Distribution",
//             "Mobile App Performance Optimization",
//             "Mobile App Analytics and User Tracking",
//             "Mobile App Monetization Strategies",
//             "Cross-Platform Mobile App Development",
//             "Responsive Design for Mobile Apps",
//             "Mobile App Push Notifications",
//             "Mobile App User Authentication",
//             "Mobile App Accessibility",
//             "Mobile App Localization and Internationalization"
//         ],
//         "imageurl":"https://images.app.goo.gl/LfqqbgMPozsMgQjDA"
        
//         },
//         {
//           "id": 5,
//           "name": "Artificial Intelligence",
//           "instructor": "Michael Brown",
//           "tags": ["artificial intelligence", "machine learning", "neural networks"],
//           "description": "Discover the field of artificial intelligence and its applications.",
//           "topics":[
//             "Machine Learning",
//             "Deep Learning",
//             "Natural Language Processing (NLP)",
//             "Computer Vision",
//            " Reinforcement Learning",
//             "Neural Networks",
//             "Genetic Algorithms",
//             "Expert Systems",
//             "Robotics and AI",
//             "Speech Recognition",
//             "Image Recognition",
//             "Data Mining",
//             "Predictive Analytics",
//             "Sentiment Analysis",
//             "Chatbots and Virtual Assistants",
//             "Autonomous Vehicles",
//             "Recommendation Systems",
//             "Ethical Implications of AI",
//             "Explainable AI (XAI)",
//             "AI in Healthcare",
//           ],
//           "imageurl":"https://images.app.goo.gl/c8TWhJzZrfRScerX9"
//         },
//         {
//           "id": 6,
//           "name": "Graphic Design Fundamentals",
//           "instructor": "Sarah Johnson",
//           "tags": ["creativity","graphic design", "design"],
//           "description": "Learn the basics of graphic design and unleash your creativity.",
//           "topics":[
//             "Elements of Design",
//             "Principles of Design",
//             "Composition",
//             "Color Theory",
//             "Typography",
//             "Layout and Grid Systems",
//             "Branding and Identity Design",
//             "Composition and Visual Communication",
//             "Image Editing and Manipulation",
//             "Design Principles for Print and Digital Media",
//           ],
//           "imageurl":"https://images.app.goo.gl/A7TznMiZMvWrVDHa9"
//         },
//         {
//           "id": 7,
//           "name": "Database Management",
//           "instructor": "Robert Thompson",
//           "tags": ["database", "management", "SQL"],
//           "description": "Master the essentials of database management using SQL.",
//           "topics":[
//             "Relational Database Management Systems (RDBMS)",
//             "Database Design",
//             "Database Architecture",
//             "Data Manipulation",
//             "Data Integrity and Constraints",
//             "Indexing and Performance Tuning",
//             "Database Security and Access Control",
//             "Backup and Recovery",
//             "Data Warehousing and Business Intelligence",
//             "NoSQL Databases"
//           ],
//           "imageurl":"https://images.app.goo.gl/HRxR1xpkUyj1m5NY6"
//         },
//         {
//           "id": 8,
//           "name": "Photography 101",
//           "instructor": "Jessica Adams",
//           "tags": ["photography", "camera", "composition"],
//           "description": "Learn the fundamentals of photography and capture stunning images.",
//           "topics":[
//             "Camera Basics",
//             "Exposure and Lighting",
//             "Composition",
//             "Focusing and Depth of Field",
//             "Lens Selection",
//             "Post-Processing and Editing",
//             "Landscape Photography",
//             "Portrait Photography",
//             "Street Photography",
//             "Wildlife and Nature Photography",
//             "Event and Documentary Photography",
//             "Travel Photography",
//           ],
//           "imageurl":"https://images.app.goo.gl/3Dmk236y7FascLgb8"
//         },
//         {
//           "id": 9,
//           "name": "UI/UX Design",
//           "instructor": "Andrew Wilson",
//           "tags": ["ui/ux", "design", "user experience"],
//           "description": "Create engaging user interfaces and enhance user experiences.",
//           "topics":[
//             "User Research",
//             "User-Centered Design (UCD)",
//             "Information Architecture",
//             "Interaction Design",
//             "Visual Design",
//             "Usability Principles and Guidelines",
//             "Prototyping and Wireframing",
//             "User Interface (UI) Patterns and Components",
//             "User Experience (UX) Evaluation and Testing",
//             "Design Systems",
//             "Mobile App Design",
//             "Web Design",
//           ],
//           "imageurl":"https://images.app.goo.gl/MRSLY3nyonv5ziix9"
//         },
//         {
//           "id": 10,
//           "name": "Digital Marketing",
//           "instructor": "Jennifer Davis",
//           "tags": ["digital marketing", "online", "social media"],
//           "description": "Master the art of digital marketing and promote your brand online.",
//           "topics":[
//             "Search Engine Optimization (SEO)",
//             "Pay-per-Click Advertising (PPC)",
//             "Social Media Marketing",
//             "Email Marketing",
//             "Content Marketing",
//             "Digital Advertising",
//             "Social Media Analytics",
//             "Conversion Rate Optimization (CRO)",
//             "Mobile Marketing",
//             "Online Reputation Management (ORM)",
//             "Marketing Analytics and Reporting",
//           ],
//           "imageurl":"https://images.app.goo.gl/XRkFgfZyGJFSxD3k9"
//         },
//         {
//           "id": 11,
//           "name": "Introduction to Finance",
//           "instructor": "Daniel Wilson",
//           "tags": ["finance", "investing", "stocks"],
//           "description": "Get a comprehensive introduction to the world of finance and investing.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/JrLYkTpZA4uSja6s7"
//         },
//         {
//           "id": 12,
//           "name": "Machine Learning",
//           "instructor": "Sophia Anderson",
//           "tags": ["machine learning", "data science", "algorithms"],
//           "description": "Explore the field of machine learning and build predictive models.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/qNcjqFKsV6b1V2wq9"
//         },
//         {
//           "id": 13,
//           "name": "Business Strategy",
//           "instructor": "Matthew Brown",
//           "tags": ["business", "strategy", "management"],
//           "description": "Learn the principles of strategic management and develop business strategies.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/vmnzsUD1TwPct17z8"
//         },
//         {
//           "id": 14,
//           "name": "Creative Writing",
//           "instructor": "Olivia Wilson",
//           "tags": ["creative writing", "writing", "fiction", "poetry"],
//           "description": "Unleash your creativity and master the art of creative writing.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/hGhiU7v245dhRdAJ6"
//         },
//         {
//           "id": 15,
//           "name": "Cybersecurity Fundamentals",
//           "instructor": "Christopher Thompson",
//           "tags": ["cybersecurity", "networking", "security"],
//           "description": "Learn the fundamentals of cybersecurity and protect against cyber threats.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/JcT9mKg7TJwriKgH8"
//         },
//         {
//           "id": 16,
//           "name": "E-commerce Essentials",
//           "instructor": "Sophie Davis",
//           "tags": ["e-commerce", "online business", "digital marketing"],
//           "description": "Build and grow your online business with essential e-commerce strategies.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/UPckVqu3tWnh1cvR9"
//         },
//         {
//           "id": 17,
//           "name": "Art History",
//           "instructor": "William Johnson",
//           "tags": ["art history", "painting", "sculpture", "architecture"],
//           "description": "Explore the history of art and learn about famous artists and movements.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/oHxgw8bvxJRWYEYa7"
//         },
//         {
//           "id": 18,
//           "name": "Public Speaking",
//           "instructor": "Emma Adams",
//           "tags": ["public speaking", "communication", "presentation"],
//           "description": "Develop effective public speaking skills and deliver impactful presentations.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/Trt3JwnuoCqrKkPZ8"
//         },
//         {
//           "id": 19,
//           "name": "Python for Data Analysis",
//           "instructor": "Alexander Brown",
//           "tags": ["python", "data analysis", "pandas", "numpy"],
//           "description": "Learn how to analyze and manipulate data using Python and popular libraries.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/vucKHFvBKAXsL2T77"
//         },
//         {
//           "id": 20,
//           "name": "Product Management",
//           "instructor": "Victoria Davis",
//           "tags": ["product management", "product development", "agile"],
//           "description": "Master the skills required to effectively manage and launch products.",
//           "topics":[],
//           "imageurl":"https://images.app.goo.gl/BEELCnJ2W6no3ovV7"
//         }
//       ];

// export const tags:any[]=[    
//   {'name': 'programming', 'count': 1}, {'name': 'beginner', 'count': 1},    {'name': 'coding', 'count': 1},    
//   {'name': 'web', 'count': 1},    {'name': 'development', 'count': 2},    {'name': 'HTML', 'count': 1},    
//   {'name': 'CSS', 'count': 1},    {'name': 'JavaScript', 'count': 1},    {'name': 'data science', 'count': 2},    
//   {'name': 'python', 'count': 2},    {'name': 'machine learning', 'count': 3},    {'name': 'mobile', 'count': 1},    
//   {'name': 'app', 'count': 1},    {'name': 'iOS', 'count': 1},    {'name': 'Android', 'count': 1},    
//   {'name': 'artificial intelligence', 'count': 1},    {'name': 'neural networks', 'count': 1},    
//   {'name': 'graphic design', 'count': 1},    {'name': 'design', 'count': 2},    {'name': 'creativity', 'count': 1},    
//   {'name': 'database', 'count': 1},    {'name': 'management', 'count': 2},    {'name': 'SQL', 'count': 1},    
//   {'name': 'photography', 'count': 1},    {'name': 'camera', 'count': 1},    {'name': 'composition', 'count': 1},    
//   {'name': 'ui/ux', 'count': 1},    {'name': 'user experience', 'count': 1},    {'name': 'digital marketing', 'count': 2},    
//   {'name': 'online', 'count': 1},    {'name': 'social media', 'count': 1},    {'name': 'finance', 'count': 1},    
//   {'name': 'investing', 'count': 1},    {'name': 'stocks', 'count': 1},    {'name': 'algorithms', 'count': 1},    
//   {'name': 'business', 'count': 1},    {'name': 'strategy', 'count': 1},    {'name': 'creative writing', 'count': 1},    
//   {'name': 'writing', 'count': 1},    {'name': 'fiction', 'count': 1},    {'name': 'poetry', 'count': 1},    
//   {'name': 'cybersecurity', 'count': 1},    {'name': 'networking', 'count': 1},    {'name': 'security', 'count': 1},    
//   {'name': 'e-commerce', 'count': 1},    {'name': 'online business', 'count': 1},    {'name': 'art history', 'count': 1},    
//   {'name': 'painting', 'count': 1},    {'name': 'sculpture', 'count': 1},    {'name': 'architecture', 'count': 1},    
//   {'name': 'public speaking', 'count': 1},    {'name': 'communication', 'count': 1},    {'name': 'presentation', 'count': 1},    
//   {'name': 'data analysis', 'count': 1},    {'name': 'pandas', 'count': 1},    {'name': 'numpy', 'count': 1},    
//   {'name': 'product management', 'count': 1},    {'name': 'product development', 'count': 1},    {'name': 'agile', 'count': 1}
// ];

export const courses:any[]=
    [
        {
          "id": 1,
          "name": "Introduction to Programming",
          "instructor": "John Smith",
          "tags": ["programming", "beginner", "coding"],
          "description": "Learn the fundamentals of programming and how to write code.",
          "topics": [
            "Variables and data types",
            "Input and output",
            "Conditional statements",
            "Loops",
            "Functions",
            "Arrays and lists",
            "Strings",
            "File handling",
            "Exception handling",
            "Object-oriented programming",
            "Recursion"
        ],
        "imageUrl":"https://images.app.goo.gl/PNHdbPkCs6KEnwAj7"
        
        },
        {
          "id": 2,
          "name": "Web Development",
          "instructor": "Jane Doe",
          "tags": ["web development", "HTML", "CSS", "JavaScript"],
          "description": "Build interactive and responsive websites using HTML, CSS, and JavaScript.",
          "topics":[
          "HTML (Hypertext Markup Language)",
          "CSS (Cascading Style Sheets)",
          "JavaScript",
          "Responsive Web Design",
          "Front-end Frameworks (e.g., Bootstrap)",
          "Backend Development (e.g., Node.js, Django, Ruby on Rails)",
          "Databases (e.g., SQL, MongoDB)",
          "APIs (Application Programming Interfaces)"
        ],
        "imageUrl":"https://images.app.goo.gl/9ognc61eamAvc2uCA"
        },
        {
          "id": 3,
          "name": "Data Science with Python",
          "instructor": "David Johnson",
          "tags": ["data science", "python", "machine learning"],
          "description": "Explore data analysis, visualization, and machine learning using Python.",
          "topics":[  
            "Introduction to Data Science",  "Python Programming Fundamentals",  
            "Data Manipulation and Analysis with Pandas", 
             "Data Visualization with Matplotlib and Seaborn", 
              "Exploratory Data Analysis (EDA)",  
              "Statistical Concepts for Data Science",  "Machine Learning Basics",  
              "Supervised Learning Algorithms (Regression, Classification)",  
              "Unsupervised Learning Algorithms (Clustering, Dimensionality Reduction)", 
               "Model Evaluation and Validation",  "Feature Engineering and Selection",  
               "Natural Language Processing (NLP)",  "Time Series Analysis",  
               "Deep Learning with Python (Neural Networks)",  "Big Data and Distributed Computing (Hadoop, Spark)", 
                "Model Deployment and Productionization"
            ],
            "imageUrl":"https://images.app.goo.gl/CJCyJ3gniSJHpvoR8"

        },
        {
          "id": 4,
          "name": "Mobile App Development",
          "instructor": "Emily Wilson",
          "tags": ["mobile", "app development", "iOS", "Android"],
          "description": "Create mobile applications for iOS and Android platforms.",
          "topics" : [
            "Introduction to Mobile App Development",
            "Mobile App Development Platforms",
            "User Interface Design for Mobile Apps",
            "Mobile App Development Lifecycle",
            "Mobile App Architecture",
            "Programming Languages for Mobile Apps",
            "Mobile App Frameworks and Libraries",
            "Database Integration in Mobile Apps",
            "Mobile App Security",
            "Mobile App Testing and Debugging",
            "Mobile App Deployment and Distribution",
            "Mobile App Performance Optimization",
            "Mobile App Analytics and User Tracking",
            "Mobile App Monetization Strategies",
            "Cross-Platform Mobile App Development",
            "Responsive Design for Mobile Apps",
            "Mobile App Push Notifications",
            "Mobile App User Authentication",
            "Mobile App Accessibility",
            "Mobile App Localization and Internationalization"
        ],
        "imageUrl":"https://images.app.goo.gl/LfqqbgMPozsMgQjDA"
        
        },
        {
          "id": 5,
          "name": "Artificial Intelligence",
          "instructor": "Michael Brown",
          "tags": ["artificial intelligence", "machine learning", "neural networks"],
          "description": "Discover the field of artificial intelligence and its applications.",
          "topics":[
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing (NLP)",
            "Computer Vision",
           " Reinforcement Learning",
            "Neural Networks",
            "Genetic Algorithms",
            "Expert Systems",
            "Robotics and AI",
            "Speech Recognition",
            "Image Recognition",
            "Data Mining",
            "Predictive Analytics",
            "Sentiment Analysis",
            "Chatbots and Virtual Assistants",
            "Autonomous Vehicles",
            "Recommendation Systems",
            "Ethical Implications of AI",
            "Explainable AI (XAI)",
            "AI in Healthcare",
          ],
          "imageUrl":"https://images.app.goo.gl/c8TWhJzZrfRScerX9"
        },
        {
          "id": 6,
          "name": "Graphic Design Fundamentals",
          "instructor": "Sarah Johnson",
          "tags": ["creativity","graphic design", "design"],
          "description": "Learn the basics of graphic design and unleash your creativity.",
          "topics":[
            "Elements of Design",
            "Principles of Design",
            "Composition",
            "Color Theory",
            "Typography",
            "Layout and Grid Systems",
            "Branding and Identity Design",
            "Composition and Visual Communication",
            "Image Editing and Manipulation",
            "Design Principles for Print and Digital Media",
          ],
          "imageUrl":"https://images.app.goo.gl/A7TznMiZMvWrVDHa9"
        },
        {
          "id": 7,
          "name": "Database Management",
          "instructor": "Robert Thompson",
          "tags": ["database", "management", "SQL"],
          "description": "Master the essentials of database management using SQL.",
          "topics":[
            "Relational Database Management Systems (RDBMS)",
            "Database Design",
            "Database Architecture",
            "Data Manipulation",
            "Data Integrity and Constraints",
            "Indexing and Performance Tuning",
            "Database Security and Access Control",
            "Backup and Recovery",
            "Data Warehousing and Business Intelligence",
            "NoSQL Databases"
          ],
          "imageUrl":"https://images.app.goo.gl/HRxR1xpkUyj1m5NY6"
        },
        {
          "id": 8,
          "name": "Photography 101",
          "instructor": "Jessica Adams",
          "tags": ["photography", "camera", "composition"],
          "description": "Learn the fundamentals of photography and capture stunning images.",
          "topics":[
            "Camera Basics",
            "Exposure and Lighting",
            "Composition",
            "Focusing and Depth of Field",
            "Lens Selection",
            "Post-Processing and Editing",
            "Landscape Photography",
            "Portrait Photography",
            "Street Photography",
            "Wildlife and Nature Photography",
            "Event and Documentary Photography",
            "Travel Photography",
          ],
          "imageUrl":"https://images.app.goo.gl/3Dmk236y7FascLgb8"
        },
        {
          "id": 9,
          "name": "UI/UX Design",
          "instructor": "Andrew Wilson",
          "tags": ["ui/ux", "design", "user experience"],
          "description": "Create engaging user interfaces and enhance user experiences.",
          "topics":[
            "User Research",
            "User-Centered Design (UCD)",
            "Information Architecture",
            "Interaction Design",
            "Visual Design",
            "Usability Principles and Guidelines",
            "Prototyping and Wireframing",
            "User Interface (UI) Patterns and Components",
            "User Experience (UX) Evaluation and Testing",
            "Design Systems",
            "Mobile App Design",
            "Web Design",
          ],
          "imageUrl":"https://images.app.goo.gl/MRSLY3nyonv5ziix9"
        },
        {
          "id": 10,
          "name": "Digital Marketing",
          "instructor": "Jennifer Davis",
          "tags": ["digital marketing", "online", "social media"],
          "description": "Master the art of digital marketing and promote your brand online.",
          "topics":[
            "Search Engine Optimization (SEO)",
            "Pay-per-Click Advertising (PPC)",
            "Social Media Marketing",
            "Email Marketing",
            "Content Marketing",
            "Digital Advertising",
            "Social Media Analytics",
            "Conversion Rate Optimization (CRO)",
            "Mobile Marketing",
            "Online Reputation Management (ORM)",
            "Marketing Analytics and Reporting",
          ],
          "imageUrl":"https://images.app.goo.gl/XRkFgfZyGJFSxD3k9"
        },
        {
          "id": 11,
          "name": "Introduction to Finance",
          "instructor": "Daniel Wilson",
          "tags": ["finance", "investing", "stocks"],
          "description": "Get a comprehensive introduction to the world of finance and investing.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/JrLYkTpZA4uSja6s7"
        },
        {
          "id": 12,
          "name": "Machine Learning",
          "instructor": "Sophia Anderson",
          "tags": ["machine learning", "data science", "algorithms"],
          "description": "Explore the field of machine learning and build predictive models.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/qNcjqFKsV6b1V2wq9"
        },
        {
          "id": 13,
          "name": "Business Strategy",
          "instructor": "Matthew Brown",
          "tags": ["business", "strategy", "management"],
          "description": "Learn the principles of strategic management and develop business strategies.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/vmnzsUD1TwPct17z8"
        },
        {
          "id": 14,
          "name": "Creative Writing",
          "instructor": "Olivia Wilson",
          "tags": ["creative writing", "writing", "fiction", "poetry"],
          "description": "Unleash your creativity and master the art of creative writing.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/hGhiU7v245dhRdAJ6"
        },
        {
          "id": 15,
          "name": "Cybersecurity Fundamentals",
          "instructor": "Christopher Thompson",
          "tags": ["cybersecurity", "networking", "security"],
          "description": "Learn the fundamentals of cybersecurity and protect against cyber threats.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/JcT9mKg7TJwriKgH8"
        },
        {
          "id": 16,
          "name": "E-commerce Essentials",
          "instructor": "Sophie Davis",
          "tags": ["e-commerce", "online business", "digital marketing"],
          "description": "Build and grow your online business with essential e-commerce strategies.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/UPckVqu3tWnh1cvR9"
        },
        {
          "id": 17,
          "name": "Art History",
          "instructor": "William Johnson",
          "tags": ["art history", "painting", "sculpture", "architecture"],
          "description": "Explore the history of art and learn about famous artists and movements.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/oHxgw8bvxJRWYEYa7"
        },
        {
          "id": 18,
          "name": "Public Speaking",
          "instructor": "Emma Adams",
          "tags": ["public speaking", "communication", "presentation"],
          "description": "Develop effective public speaking skills and deliver impactful presentations.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/Trt3JwnuoCqrKkPZ8"
        },
        {
          "id": 19,
          "name": "Python for Data Analysis",
          "instructor": "Alexander Brown",
          "tags": ["python", "data analysis", "pandas", "numpy"],
          "description": "Learn how to analyze and manipulate data using Python and popular libraries.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/vucKHFvBKAXsL2T77"
        },
        {
          "id": 20,
          "name": "Product Management",
          "instructor": "Victoria Davis",
          "tags": ["product management", "product development", "agile"],
          "description": "Master the skills required to effectively manage and launch products.",
          "topics":[],
          "imageUrl":"https://images.app.goo.gl/BEELCnJ2W6no3ovV7"
        }
      ];
export const tags:any[]=
    [{'name': 'programming', 'count': 1},
     {'name': 'beginner', 'count': 1}, {'name': 'coding', 'count': 1},
     {'name': 'web development', 'count': 1}, {'name': 'HTML', 'count': 1}, {'name': 'CSS', 'count': 1},
        {'name': 'JavaScript', 'count': 1}, {'name': 'data science', 'count': 2}, 
      {'name': 'python', 'count': 2}, {'name': 'machine learning', 'count': 3},
       {'name': 'mobile', 'count': 1}, {'name': 'app development', 'count': 1},
        {'name': 'iOS', 'count': 1}, {'name': 'Android', 'count': 1}, 
        {'name': 'artificial intelligence', 'count': 1}, 
        {'name': 'neural networks', 'count': 1}, {'name': 'creativity', 'count': 1}, 
        {'name': 'graphic design', 'count': 1}, {'name': 'design', 'count': 2},
        {'name': 'database', 'count': 1}, {'name': 'management', 'count': 2},
          {'name': 'SQL', 'count': 1}, {'name': 'photography', 'count': 1},
           {'name': 'camera', 'count': 1}, {'name': 'composition', 'count': 1},
            {'name': 'ui/ux', 'count': 1}, {'name': 'user experience', 'count': 1},
             {'name': 'digital marketing', 'count': 2}, {'name': 'online', 'count': 1},
              {'name': 'social media', 'count': 1}, {'name': 'finance', 'count': 1}, 
              {'name': 'investing', 'count': 1}, {'name': 'stocks', 'count': 1},
               {'name': 'algorithms', 'count': 1}, {'name': 'business', 'count': 1},
                {'name': 'strategy', 'count': 1}, {'name': 'creative writing', 'count': 1},
                 {'name': 'writing', 'count': 1}, {'name': 'fiction', 'count': 1}, 
                 {'name': 'poetry', 'count': 1}, {'name': 'cybersecurity', 'count': 1},
                  {'name': 'networking', 'count': 1}, {'name': 'security', 'count': 1},
                   {'name': 'e-commerce', 'count': 1}, {'name': 'online business', 'count': 1},
                    {'name': 'art history', 'count': 1}, {'name': 'painting', 'count': 1},
                     {'name': 'sculpture', 'count': 1}, {'name': 'architecture', 'count': 1},
                      {'name': 'public speaking', 'count': 1}, {'name': 'communication', 'count': 1},
                       {'name': 'presentation', 'count': 1}, {'name': 'data analysis', 'count': 1}, 
                       {'name': 'pandas', 'count': 1}, {'name': 'numpy', 'count': 1}, 
                       {'name': 'product management', 'count': 1}, {'name': 'product development', 'count': 1},
                        {'name': 'agile', 'count': 1}]

export const sample_users: any[] = [
  {
    name: "Dileep",
    email: "dileep@gmail.com",
    password: "12345",
    phone:'1234567890',
    isAdmin: true,
  },
  {
    name: "Vinay",
    email: "vinay@gmail.com",
    password: "12345",
    isAdmin: false,
    phone:'0987654321',
    enrolled_courses:[],
    completed_courses:[]
  },
  {
    name: "Krishna",
    email: "krishna@gmail.com",
    password: "12345",
    isAdmin: false,
    phone:'0987612345',
    enrolled_courses:[],
    completed_courses:[]
  }
];