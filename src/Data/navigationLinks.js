
import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarCheck,
  BarChart2,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";

const NavigationLinks = {
    General:[{label:"Dashboard",
        icon:LayoutDashboard
    },
    {label:"History",
        icon:History
    },
    {label:"Calendar",
        icon:Calendar
    },
    {label:"Appointments",
        icon:CalendarCheck
    },
    {label:"Statistics",
        icon:BarChart2
    },
    ],
    Tools:[{label:"Chart",
        icon:MessageCircle
    },
    {label:"Support",
        icon:LifeBuoy
    },]
}

export default NavigationLinks