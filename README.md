# إسلام وخلود — دعوة الزفاف

دعوة رقمية لحضور حفل زفاف إسلام وخلود في **٢٨ نوفمبر ٢٠٢٦** بدار الأشغال العسكرية، قاعة كريستال.

- المستودع: https://github.com/eslama99/EslamAndLolla
- الدعوة المنشورة (بعد تفعيل Pages): https://eslama99.github.io/EslamAndLolla/
- سجل التهاني: https://eslama99.github.io/EslamAndLolla/tahani/ (أو `/wishes/`)

تهاني الضيوف تُحفظ عبر MantleDB (مجاني ويعمل من GitHub Pages)، ثم تُعرض في صفحة `/tahani`.

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح [http://localhost:3000](http://localhost:3000).

## النشر على GitHub Pages (تلقائي)

المشروع مظبوط ينشر نفسه أوتوماتيك عبر GitHub Actions (`.github/workflows/deploy.yml`) في كل مرة تعمل فيها push على فرع `main`. المطلوب منك مرة واحدة بس:

1. ارفع المشروع إلى مستودعك: `https://github.com/eslama99/EslamAndLolla`
2. من إعدادات المستودع: **Settings → Pages**
3. تحت **Build and deployment → Source** اختر **GitHub Actions**
4. اعمل push لأي تعديل (أو شغّل الـ workflow يدويًا من تبويب **Actions**)
5. بعد دقيقتين تقريبًا هتلاقي الدعوة شغالة على: `https://eslama99.github.io/EslamAndLolla/`

> ملحوظة: المتغيّر `NEXT_PUBLIC_BASE_PATH` في ملف `.env.production` مظبوط على `/EslamAndLolla` عشان الصور والروابط تشتغل صح تحت هذا المسار. لو غيّرت اسم المستودع، غيّر هذا السطر كمان ليتطابق مع الاسم الجديد.

### النشر اليدوي (بديل)

```bash
npm run build
# ثم ارفع محتوى مجلد out/ لأي استضافة ثابتة (Netlify, Cloudflare Pages, إلخ)
```

## بديل اختياري: Google Apps Script

إن رغبت في حفظ التهاني في Google Sheet بدل MantleDB، تقدر تنشئ مشروع Apps Script خاص بيك (الكود جاهز في `scripts/guestbook-apps-script.js`):

1. أنشئ مشروع جديد على https://script.google.com وانسخ محتوى `scripts/guestbook-apps-script.js`
2. **Deploy → Manage deployments** → Web app
3. Execute as: **Me** · Who has access: **Anyone**
4. Authorize، ثم الصق رابط `…/exec` في `lib/guestbook-config.ts` داخل `GUESTBOOK_SCRIPT_URL`
5. أعد البناء والنشر
