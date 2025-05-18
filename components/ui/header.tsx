import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // حالة لتفعيل إظهار/إخفاء المينيو
  const [isDetailVisible, setIsDetailVisible] = useState(false); // حالة لإظهار التفاصيل كـ بوب أب
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null); // حالة لعرض التفاصيل

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev); // تغيير حالة المينيو
  };

  // دالة لعرض التفاصيل عند الضغط على العناوين
  const handlePress = (detail: string) => {
    setSelectedDetail(detail); // تعيين التفاصيل التي سيتم عرضها
    setIsDetailVisible(true); // إظهار بوب أب التفاصيل
  };

  // محتوى كل قسم عند الضغط عليه
  const renderDetailContent = () => {
    switch (selectedDetail) {
      case 'features-services':
        return (
          <View>
            <Text style={styles.modalTitle}>مميزات وخدمات التطبيق</Text>
            <Text style={styles.modalText}>
              نقدم لكم مجموعة من المميزات والخدمات المبتكرة التي تتيح لكم تجربة استخدام سلسة وممتعة. يتم تحديث خدماتنا بشكل دوري لتلبية احتياجاتكم.
              <Text style={styles.boldText}> تشمل أبرز المميزات:</Text>
              {'\n'}- واجهة مستخدم سهلة الاستخدام
              {'\n'}- تحديثات منتظمة
              {'\n'}- أدوات التفاعل المتقدمة
              {'\n'}- خدمات دعم فني
              {'\n'}- الأمان وحماية البيانات
            </Text>
          </View>
        );
      case 'contact-us':
        return (
          <View>
            <Text style={styles.modalTitle}>اتصل بنا</Text>
            <Text style={styles.modalText}>
              إذا كانت لديك أي استفسارات أو بحاجة إلى مساعدة، لا تتردد في الاتصال بنا.
              {'\n'}- البريد الإلكتروني: support@soknaapp.com
              {'\n'}- رقم الهاتف: +1234567890
              {'\n'}- العنوان: شارع 123، المدينة، الدولة.
            </Text>
          </View>
        );
      case 'privacy-policy':
        return (
          <View>
            <Text style={styles.modalTitle}>سياسة الخصوصية</Text>
            <Text style={styles.modalText}>
              نحن نولي أهمية كبيرة لخصوصيتك. تُظهر هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا عند استخدام تطبيقنا.
              {'\n'}- جمع المعلومات: نقوم بجمع المعلومات الشخصية عند التسجيل أو استخدام خدماتنا.
              {'\n'}- استخدام المعلومات: نستخدم المعلومات لتحسين خدماتنا.
              {'\n'}- حماية المعلومات: نستخدم تقنيات أمان متقدمة لحماية بياناتك الشخصية.
              {'\n'}- مشاركة المعلومات: لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون إذن منك.
            </Text>
          </View>
        );
      case 'security-center': // تغيير إلى مركز الأمان
        return (
          <View>
            <Text style={styles.modalTitle}>مركز الأمان</Text>
            <Text style={styles.modalText}>
              مركز الأمان هو مكان مخصص لحماية بياناتك الشخصية وضمان أمان معلوماتك. نحن نعمل على توفير أعلى معايير الأمان للمستخدمين.
              {'\n'}- **تشفير البيانات:** جميع البيانات التي تقدمها لنا يتم تشفيرها باستخدام تقنيات حديثة.
              {'\n'}- **الحماية من الاختراق:** نحن نستخدم جدران حماية متقدمة لمنع أي هجمات إلكترونية.
              {'\n'}- **التحقق الثنائي:** نقدم خدمة التحقق الثنائي لضمان أمان حسابك.
              {'\n'}- **إجراءات الأمان المستمرة:** نحن نعمل على تحديث إجراءات الأمان بشكل مستمر.
              {'\n'}- **حماية خصوصيتك:** نلتزم بحماية خصوصيتك وعدم مشاركة بياناتك مع أطراف ثالثة دون إذن منك.
            </Text>
          </View>
        );
      default:
        return <Text style={styles.modalText}>اختيار غير معروف</Text>;
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* أيقونة القائمة - عند الضغط عليها يتم فتح/إغلاق المينيو */}
      <TouchableOpacity onPress={toggleMenu}>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>

      {/* الشعار */}
      <Image 
        source={require('../../assets/images/Logo.png')}  // ضع مسار الشعار المناسب هنا
        style={styles.logo}
        resizeMode="contain"
      />

      {/* أيقونة البروفايل */}
      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={28} />
      </TouchableOpacity>

      {/* القائمة المنسدلة (Drawer) داخل الهيدر */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity onPress={toggleMenu} style={styles.overlay}>
          <View style={styles.drawerContent}>
            {/* الشعار في المينيو */}
            <View style={styles.logoContainer}>
              <Image 
                source={require('../../assets/images/Logo.png')}  // مسار الشعار
                style={styles.drawerLogo}
                resizeMode="contain"
              />
            </View>

            {/* العناصر داخل المينيو */}
            <TouchableOpacity onPress={() => handlePress('features-services')}>
              <Text style={styles.menuItem}>مميزات و خدمات</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('contact-us')}>
              <Text style={styles.menuItem}>اتصل بنا</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('privacy-policy')}>
              <Text style={styles.menuItem}>سياسة التطبيق</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('security-center')}> {/* تم تغيير الاسم هنا */}
              <Text style={styles.menuItem}>مركز الأمان</Text>
            </TouchableOpacity>

            {/* أزرار السوشيال ميديا في أسفل المينيو */}
            <View style={styles.socialIcons}>
              <Ionicons name="logo-snapchat" size={28} style={styles.socialIcon} />
              <Ionicons name="logo-instagram" size={28} style={styles.socialIcon} />
              <Ionicons name="logo-whatsapp" size={28} style={styles.socialIcon} />
              <Ionicons name="logo-facebook" size={28} style={styles.socialIcon} />
            </View>

            {/* أسفل القائمة: معلومات إضافية */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>سوفنا</Text>
              <Text style={styles.footerText}>V4.9.18</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* عرض التفاصيل في نافذة منبثقة (Popup) */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isDetailVisible}
        onRequestClose={() => setIsDetailVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.modalTextContainer}>
              {renderDetailContent()}
            </ScrollView>
            <TouchableOpacity onPress={() => setIsDetailVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>إغلاق</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 30,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  drawerContent: {
    backgroundColor: 'white',
    height: '100%',
    width: '80%',
    padding: 15,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  drawerLogo: {
    width: 100,
    height: 30,
  },
  menuItem: {
    fontSize: 18,
    color: '#3B82F6',
    marginBottom: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 250,
    marginBottom: 20,
  },
  socialIcon: {
    marginRight: 15,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },

  // ستايلات للـ Modal (Popup) عند الضغط على العناوين
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'left',
  },
  modalTextContainer: {
    paddingBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'right',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'right',
  },
  boldText: {
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
