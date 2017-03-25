var bio = {
    "name": "Jonathan Griffin",
    "role": "The Webmaster",
    "contacts": {
        "mobile": "Hidden",
        "email": "jonathan@thewebmaster.com",
        "twitter": "@thewebmastercom",
        "github": "thewebmastercom",
        "location": "Wisbech"
    },
    "welcomeMessage": "Thanks for reading my resume",
    "skills": [
        "Python", "HTML", "CSS", "Javascript"
    ],
    "biopic": "images/fry.jpg"
};

var work = {
    "jobs": [{
            "employer": "TheWebmaster.com Ltd",
            "title": "Editor-in-Chief",
            "location": "Wisbech, UK",
            "dates": "17-03-2014 - Present",
            "description": "Editor-in-Chief of the online publication for Webmasters."
        },
        {
            "employer": "Zingy Creations",
            "title": "Owner",
            "location": "Colchester, UK",
            "dates": "01-06-2009 - 17-03-2014",
            "description": "Serving small businesses producing affordable WordPress websites, and local SEO."
        },
        {
            "employer": "Birketts LLP",
            "title": "Solicitor",
            "location": "Ipswich, UK",
            "dates": "01-06-2006 - 01-06-2009",
            "description": "All areas of commercial Property law, including Local Government property issues."
        },
        {
            "employer": "Holmes & Hills LLP",
            "title": "Solicitor",
            "location": "Braintree, UK",
            "dates": "01-06-2004 - 01-06-2006",
            "description": "All areas of commercial Property law, including Local Government property issues."
        },
        {
            "employer": "Plummer Tilsley Logan LLP",
            "title": "Trainee Solicitor",
            "location": "Braintree, UK",
            "dates": "01-06-2002 - 01-06-2004",
            "description": "Wills & Probate, Property Law, Litigation."
        }
    ]
};

var education = {
    "schools": [{
            "name": "University of Wolverhampton",
            "location": "Wolverhampton",
            "degree": "Law",
            "majors": ["Law", "Legal"],
            "dates": "1998-2001",
            "url": "https://www.wlv.ac.uk/"
        },
        {
            "name": "University of Wolverhampton",
            "location": "Wolverhampton",
            "degree": "LPC",
            "majors": ["Legal Practice"],
            "dates": "1998-2001",
            "url": "https://www.wlv.ac.uk/"
        }
    ],
    "onlineCourses": [{
            "title": "Intro to Programming",
            "school": "Udactiy",
            "dates": "01/12/2016 - 31/3/2017",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Linux Command Line Basics",
            "school": "Udactiy",
            "dates": "01/01/2017 - 14/01/2017",
            "url": "https://www.udacity.com"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udactiy",
            "dates": "14/01/2017 - 01/02/2017",
            "url": "https://www.udacity.com"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Top 30 Movies For Programmers",
        "dates": "01-02-2017 - Present",
        "description": "A list of the top 30 movies for programmers",
        "images": ["images/197x148.gif"]
    }]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedLocation);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").prepend(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").prepend(formattedGithub);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").prepend(formattedEmail);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").prepend(formattedMobile);
    $("#footerContacts").prepend(formattedLocation);
    $("#footerContacts").prepend(formattedTwitter);
    $("#footerContacts").prepend(formattedGithub);
    $("#footerContacts").prepend(formattedEmail);
    $("#footerContacts").prepend(formattedMobile);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};


work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    });
};


projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(formattedProjectImage);
    });
};


education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", "http://" + school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors.join(", "));
        $(".education-entry:last").append(formattedSchoolMajor);
    });
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", "http://" + course.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", "http://" + course.url);
        $(".education-entry:last").append(formattedOnlineURL);
    });

};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
