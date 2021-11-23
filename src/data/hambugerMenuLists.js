const realastate = [
    {text:"דירות למכירה",url:""},
    {text:"דירות להשכרה",url:""},
    {text:"דירות שותפים",url:""},
    {text:'נדל"ן מסחרי',url:""},
    {text:"חיפוש נכסים על גבי מפה",url:""},
    {text:"כונס נכסים",url:""},
    {text:"דורון - העוזר האישי",url:""},
    {text:"יד1 דירות חדשות",url:""},
    {text:"הערכת שווי נכס",url:""},
    {text:"משרדי תיווך בישראל",url:""},
]

const cars = [
    {text:"פרטי",url:""},
    {text:"מסחרי",url:""},
    {text:"ג'יפים",url:""},
    {text:"אופנועים",url:""},
    {text:"קטנועים",url:""},
    {text:"מיוחדים",url:""},
    {text:"אביזרים",url:""},
    {text:"משאיות",url:""},
    {text:"כלי שיט",url:""},
    {text:"קטלוג רכבים",url:""},
    {text:"מחירון רכב",url:""},
    {text:"מכרזים וכינוס",url:""},
    {text:"מימון רכב",url:""},
]

const secondHand = [
    {text:"כל המוצרים",url:""},
    {text:"מוצרי חשמל",url:""},
    {text:"ריהוט",url:""},
    {text:"עסקים למכירה",url:""},
    {text:"ספורט",url:""},
    {text:"סלולרי",url:""},
    {text:"לתינוק ולילד",url:""},
    {text:"הכל בחינם!",url:""},    
    {text:"קונסולות משחקים",url:""},
    {text:"מחשבים וציוד נלווה",url:""},
    {text:"לגינה",url:""},
    {text:"אופנה וטיפוח",url:""},
    {text:"יד2 מכל הלב",url:""},
]

const wantedIL = [
    {text:"חיפוש עבודה",url:""},
    {text:"פרסום משרות",url:""},
    {text:"כתיבת קורות חיים",url:""},
    {text:"אודות החברות",url:""},
    {text:"דרושים הייטק",url:""},
    {text:"דרושים סטודנטים",url:""},
    {text:"מגזין הקריירה",url:""},
    {text:"כספים",url:""},
    {text:"מכירות",url:""},
    {text:"שירות לקוחות",url:""},
    {text:"אדמיניסטרציה",url:""},
    {text:"מהנדסים",url:""},
    {text:"תחבורה",url:""},
    {text:"מסעדנות/תיירות",url:""},
    {text:"אבטחה",url:""},
    {text:"בריאות",url:""},
    {text:"בעלי מקצוע",url:""},
    {text:"הדרכה/הוראה",url:""},
    {text:"שיווק",url:""},
]

const buissnessForSale = [
    {text:"בתי קפה ומסעדות",url:""},
    {text:"זכיינות",url:""},
    {text:"קווי חלוקה",url:""},
    {text:"הזדמנויות עסקיות",url:""},
    {text:"מינימרקטים וסופרמרקטים",url:""},
    {text:"קיוסקים ופיצוציות",url:""},
    {text:"לכל העסקים",url:""},
]

const pets = [
    {text:"כלבים",url:""},
    {text:"חתולים",url:""},
    {text:"תוכים ובעלי כנף",url:""},
    {text:"דגים",url:""},
    {text:"זוחלים",url:""},
    {text:"מכרסמים",url:""},
    {text:"סוסים",url:""},
    {text:"תרנגולים",url:""},
    {text:"חיות משק",url:""},
    {text:"חמוסים",url:""},
]

const professionals = [
    {text:"מכוני בדיקה ורישוי לרכב",url:""},
    {text:"רחיצת רכב",url:""},
    {text:"שמאי מקרקעין",url:""},
    {text:"חומרי בניין",url:""},
    {text:"אינסטלטור",url:""},
    {text:"חשמלאים",url:""},
    {text:"שיפוצים",url:""},
    {text:"הובלות",url:""},
    {text:"רהיטים",url:""},
    {text:"חברות ניקיון ואחזקה",url:""},
    {text:"לכל בעלי המקצוע",url:""},
]

export const hamburgerMenuQuickList = [
    {name:'נדל"ן',url:"",logo:["fas","home"]},
    {name:"רכב",url:"",logo:["fas","car-side"]},
    {name:"יד שנייה",url:"",logo:["fas","couch"]},
    {name:"עסקים למכירה",url:"",logo:["fas","suitcase"]},
    {name:"דרושים IL",url:"",logo:["fas","search"]},
    {name:"חיות מחמד",url:"",logo:["fas","paw"]},
    {name:"תיירות ונופש",url:"",logo:["fas","tree"]},
    {name:"לימודים",url:"",logo:["fas","graduation-cap"]},
]

export const navigationList = [
    {name:'נדל"ן',expandableMenu:realastate},
    {name:"רכב",expandableMenu:cars},
    {name:"יד שנייה",expandableMenu:secondHand},
    {name:"דרושים IL",expandableMenu:wantedIL},
    {name:"עסקים למכירה",expandableMenu:buissnessForSale},
    {name:"חיות מחמד",expandableMenu:pets},
    {name:"בעלי מקצוע",expandableMenu:professionals},
    {name:"תיירות ונופש",expandableMenu:[]},
    {name:"לימודים",expandableMenu:[]},
    {name:"מגזין יד2",expandableMenu:[]},
]

export const footerButtons = [
    {iconName:["fas","pencil-alt"],subtitle:"תקנון"},
    {iconName:["fas","key"],subtitle:"פרטיות ותנאים"},
    {iconName:["fas","male"],subtitle:"נגישות"},
    {iconName:["fas","question"],subtitle:"מענה לשאלות"},
    {iconName:["fas","mobile-alt"],subtitle:"יצירת קשר"},
]