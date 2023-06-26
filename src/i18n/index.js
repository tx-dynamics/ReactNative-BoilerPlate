import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

const resources = {
    en: {
        translation: {
            "Splash screen": "Splash screen",
            "Login": "Login",
            "Login Screen": "Login Screen",
            "Signup": "Signup",
            "Signup Screen": "Signup Screen",
            "Dashboard": "Dashboard",
            "Favorite": "Favorite",
            "Profile": 'Profile',
            "Profile Screen": 'Profile Screen',
            "Dashboard Screen": 'Dashboard Screen',
            "Favorite Screen": 'Favorite Screen',
            "Dark Mode": 'Dark Mode',
            "Logout": "Logout",
            "Urdu": "Urdu",
            "Enter Email!": "Enter Email!",
            "Enter Password!": "Enter Password!",
            "Enter Name!": "Enter Name!",
            "Enter Confirm Password!": "Enter Confirm Password!",
            "Enter valid email address!": "Enter valid email address!",
            "8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!": "8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!",
            "password did not matched!": "password did not matched!",
            "Private Chat": "Private Chat",
            "Group Chat": "Group Chat",
            "Paginated List": "Paginated List",
            "Map View": "Map View"
        }
    },
    ur: {
        translation: {
            "Splash screen": "سپلیش اسکرین",
            "Login": "لاگ ان",
            "Login Screen": "لاگ ان اسکرین",
            "Signup": "سائن اپ",
            "Signup Screen": "سائن اپ اسکرین",
            "Dashboard": "ڈیش بورڈ",
            "Favorite": "پسندیدہ",
            "Profile": 'پروفائل',
            "Profile Screen": 'پروفائل اسکرین',
            "Dashboard Screen": 'ڈیش بورڈ اسکرین',
            "Favorite Screen": 'پسندیدہ اسکرین',
            "Dark Mode": 'ڈارک موڈ',
            "Logout": "لاگ آوٹ",
            "Urdu": "اردو",
            "Enter Email!": "ای میل درج کریں!",
            "Enter Password!": "پاس ورڈ درج کریں!",
            "Enter Name!": "نام درج کریں!",
            "Enter Confirm Password!": "کنفرم پاس ورڈ درج کریں!",
            "Enter valid email address!": "درست ای میل ایڈریس درج کریں!",
            "8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!": "8 حروف کی ضرورت ہے، ایک بڑا، ایک چھوٹا، ایک نمبر اور ایک خصوصی کیس کریکٹر!",
            "password did not matched!": "پاس ورڈ نہیں ملا!",
            "Private Chat": "پرائیویٹ چیٹ",
            "Group Chat": "گروپ چیٹ",
            "Paginated List": "صفحہ بندی کی فہرست",
            "Map View": "نقشہ دیکھیں"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        compatibilityJSON: 'v3',
        lng: I18nManager.isRTL ? "ur" : "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;