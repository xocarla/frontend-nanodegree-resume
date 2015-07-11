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
            " Systems Enginnering",
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = format(bio.contacts.mobile, HTMLmobile);
var formattedEmail = format(bio.contacts.email, HTMLemail);
var formattedGithub = format(bio.contacts.github, HTMLgithub);
var formattedLocation = format(bio.contacts.location, HTMLlocation);
var formattedBioPic = format(bio.biopic, HTMLbioPic);
var formattedSkills = format(bio.skills, HTMLskills);



$("#header").prepend(formattedBioPic).append(formattedName,formattedRole, formattedEmail, formattedGithub, formattedLocation)
$("#header").append(HTMLskillsStart).append(formattedSkills)


var formattedMobile = format(bio.contacts.mobile, HTMLmobile);
var formattedEmail = format(bio.contacts.email, HTMLemail);

    var work = [
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
    }]

function displayWork() {
for (var jobs in work) {
var formattedEmployer = format(work[jobs].employer, HTMLworkEmployer);
var formattedTitle = format(work[jobs].title, HTMLworkTitle);
var formattedLocation = format(work[jobs].location, HTMLworkLocation);
var formattedDates = format(work[jobs].dates, HTMLworkDates);
var description = "";
for (i = 0; i < work[jobs].description.length; i++) {
    description = description + work[jobs].description[i] + "<BR/>";}

var formattedDescription = format(description, HTMLworkDescription);
var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation;
$("#workExperience").append(HTMLworkStart);
$(".work-entry:last").append(formattedEmployerTitle).append(formattedDescription);


//.append(formattedEmployer).append(formattedTitles);
}}

displayWork();

$(document).click( function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

//var formattedGithub = format(bio.contacts.github, HTMLgithub);
//var formattedLocation = format(bio.contacts.location, HTMLlocation);
//var formattedBioPic = format(bio.biopic, HTMLbioPic);
    var projects = [
     {
      "dates": "Will do at later dates",
      "title": "Will do at later dates",
      "description": "Will do at later dates"
    }]

    var education = [
    {
        "schools": [
            {
                "name": "University of Alabama in Huntsville",
                "location": "Huntsville, AL",
                "degree": "MS",
                "majors": "Electrical Engineering, Control Theory",
                "minors": "Communications",
                "dates": "2011 - 2013",
                "url": "http://www.uah.edu/"
            },
            {
                "name": "University of Illinois at Urbana-Champaign",
                "location": "Urbana",
                "degree": "BS",
                "majors": "Electrical Engineering",
                "dates": "2008 - 2010",
                "url": "http://illinois.edu/"
            },
            {
                "name": "Kankakee Community College",
                "location": "Kankakee",
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
    ]

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

    format = HTMLheaderName.replace("%data%", name);