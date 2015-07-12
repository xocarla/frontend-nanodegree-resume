var bio =
    {
        "name": "Carla A. Kopp",
        "role": "QA Engineer",
        "contacts":
            {
                "mobile": "815-713-5961",
                "email": "xocarla@gmail.com",
                "github": "xocarla",
                "location": "Madison, AL"
            },
        "welcomeMessage": "Interested in the Defense, Space, and Commercial industries. Professional background includes development, systems, and test work on software projects for military and commercial applications. Familiar with Agile methodologies. Proven record in streamlining processes associated with software, including installer creation and regression testing. Undergraduate educational background includes robotics, embedded systems, and mechatronics at a school consistently ranked in the top 5 of electrical engineering programs. Graduate educational background includes controls and communications with a focus on modern control theories. Specialties: Robotics, Control Theory, Communications, Embedded Systems",
        "skills": [
            "Testing",
            " Systems Engineering",
            " Agile Methodologies",
            " Software Documentation",
            " Control Theory"
        ],
        "biopic": "images/carla.jpg"
    }



function format(data, html) {
      formattedData = html.replace("%data%", data);
      return formattedData;
    }

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = format(bio.contacts.mobile, HTMLmobile);
    var formattedEmail = format(bio.contacts.email, HTMLemail);
    var formattedGithub = format(bio.contacts.github, HTMLgithub);
    var formattedLocation = format(bio.contacts.location, HTMLlocation);
    var formattedBioPic = format(bio.biopic, HTMLbioPic);
    var formattedSkills = format(bio.skills, HTMLskills);
    $("#header").append(formattedName,formattedRole, formattedBioPic, formattedEmail, formattedGithub, formattedLocation)
    $("#header").append(HTMLskillsStart).append(formattedSkills);
    }

bio.display();

var work = { "jobs": [
    {
        "employer": "Synapse Wireless, Inc.",
        "dates": "February 2014 - Present",
        "title": "Quality Assurance Test Engineer",
        "location": "Huntsville, AL",
        "description": [
            "Review and understand project requirements, architecture, and other project documentation",
            "Plan, design and implement software test cases to verify products perform robustly and according to specification",
            "Work with design engineering and customer support to duplicate, isolate & document bug reports",
            "Regression test new software releases including initial installation processes",
            "Plan and create documentation such as user guides, reference manuals and application notes"
        ]
    },
    {
        "employer": "AAI Corporation",
        "dates": "June 2013 - January 2014",
        "title": "Systems Engineer II",
        "location": "Huntsville, AL",
        "description": [
            "Responsible for ensuring software met all functional requirements by performing different levels of testing",
            "Develop and execute test plans and test cases for the UGCS Infrastructure (UI2) project",
            "Generate comprehensive test reports for the customer",
            "Collaborated with Lead Software and Systems Engineers to refine the test process in an Agile environment thereby reducing the backlog by 43%",
            "Reduced the time needed for formal test from three days to one day by optimizing the test procedure",
            "Troubleshot the UGCS system for demonstrations and testing",
            "Managed software licenses for the Huntsville branch",
            "Maintained the servers for Rally, MagicDraw, and Teamwork",
            "Verified requirements and use cases were relevant and useful",
            "Developed orientation package and mentored new employees",
            "Perform exploratory test in an Agile environment",
            "Create all test and interface documentation"
        ]
    },
    {
        "employer": "AAI Corporation",
        "dates": "June 2012 - June 2013",
        "title": "Systems Engineer I",
        "location": "Huntsville, AL",
        "description": [
            "Responsible for ensuring software met all functional requirements by performing different levels of testing",
            "Develop and execute test plans and test cases for the UGCS Infrastructure (UI2) project",
            "Generate comprehensive test reports for the customer",
            "Collaborated with Lead Software and Systems Engineers to refine the test process in an Agile environment thereby reducing the backlog by 43%",
            "Reduced the time needed for formal test from three days to one day by optimizing the test procedure",
            "Troubleshot the UGCS system for demonstrations and testing",
            "Managed software licenses for the Huntsville branch",
            "Maintained the servers for Rally, MagicDraw, and Teamwork",
            "Verified requirements and use cases were relevant and useful",
            "Developed orientation package and mentored new employees",
            "Perform exploratory test in an Agile environment",
            "Create all test and interface documentation"
        ]
    },
    {
        "employer": "AAI Corporation",
        "dates": "May 2011 - June 2012",
        "title": "Software Engineer I",
        "location": "Huntsville, AL",
        "description": [
            "Fix defects for the Task Automation Program (TAP) and UAS Control Segment (UCS) services using Java, PostgreSQL, and C++",
            "Create installers for the TAP software, UCS services, and Middleware using InstallAnywhere and RPMs",
            "Write Build Procedures, Installation Guides, and User Manuals for the TAP software and UCS Services"
        ]
    }]}

    work.display = function() {
        for (var jobs in work.jobs) {
            var formattedEmployer = format(work.jobs[jobs].employer, HTMLworkEmployer);
            var formattedTitle = format(work.jobs[jobs].title, HTMLworkTitle);
            var formattedLocation = format(work.jobs[jobs].location, HTMLworkLocation);
            var formattedDates = format(work.jobs[jobs].dates, HTMLworkDates);
            var description = "";
            for (i = 0; i < work.jobs[jobs].description.length; i++) {
                description = description + work.jobs[jobs].description[i] + "<BR/>";}
            var formattedDescription = format(description, HTMLworkDescription);
            var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation;
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle).append(formattedDescription);
    }};

    work.display();

    $(document).click( function (loc) {
        var x = loc.pageX;
        var y = loc.pageY;
        logClicks(x,y);
    });

var projects =  { "projects": [
     {
      "dates": "Will do at later dates",
      "title": "Will do at later dates",
      "description": "Will do at later dates",
      "images": []
    },
     {
      "dates": "Will do at later dates",
      "title": "Will do at later dates",
      "description": "Will do at later dates",
      "images": ["images/project2-1.png", "images/project2-2.png"]
    }
    ]}

projects.display = function() {
    for (var project in projects.projects) {
        var formattedTitle = format(projects.projects[project].title, HTMLprojectTitle);
        var formattedDates = format(projects.projects[project].dates, HTMLprojectDates);
        var formattedDescription = format(projects.projects[project].description, HTMLprojectDescription);
        var images = "";
        for (i = 0; i < projects.projects[project].images.length; i++) {
            formattedImage = format(projects.projects[project].images[i], HTMLprojectImage);
            images = images + " " + formattedImage;}
        var formattedProjects = formattedTitle + formattedDates + formattedDescription;
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedProjects).append(images);
    }}

projects.display();


var education = {
        "schools": [
            {
                "name": "University of Alabama in Huntsville",
                "location": "Huntsville, AL",
                "degree": "MS",
                "majors": "Electrical Engineering with a focus in Control Theory",
                "minors": "Communications",
                "dates": "2011 - 2013",
                "url": "http://www.uah.edu/"
            },
            {
                "name": "University of Illinois at Urbana-Champaign",
                "location": "Urbana, IL",
                "degree": "BS",
                "majors": "Electrical Engineering",
                "dates": "2008 - 2010",
                "url": "http://illinois.edu/"
            },
            {
                "name": "Kankakee Community College",
                "location": "Kankakee, IL",
                "degree": "AS",
                "majors": "Engineering",
                "dates": "2006 - 2008",
                "url": "http://www.kcc.edu/"
            }
        ],
        "onlineCourses": [
            {
                "title": "Javascript Basics",
                "school": "Udacity",
                "date": "July 2015",
                "url": "https://www.udacity.com/course/progress#!/c-ud804"
            }
        ]
    }


education.display = function() {
        for (var school in education.schools) {
            var formattedSchool = format(education.schools[school].name, HTMLschoolName);
            console.log(education.schools[school].name);
            var formattedDegree = format(education.schools[school].degree, HTMLschoolDegree);
            var formattedLocation = format(education.schools[school].location, HTMLschoolLocation);
            var formattedDates = format(education.schools[school].dates, HTMLschoolDates);
            var formattedMajor = format(education.schools[school].majors, HTMLschoolMajor);
            var formattedSchoolInfo = formattedSchool + formattedDegree + formattedDates + formattedMajor + formattedLocation;
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolInfo);
}};

education.display();

$("#mapDiv").append(googleMap);

google.maps.event.addListener(marker, 'click', function() {
    // your code goes here
});