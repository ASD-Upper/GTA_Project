const audio = document.getElementById('backgroundMusic');
        const image = document.getElementById('playImage');

        // التحقق مما إذا كان المستخدم قد زار الموقع من قبل
        if (localStorage.getItem('hasVisited') === 'true') {
            // إذا كان قد زار الموقع من قبل، قم بإعادة تشغيل الأغنية تلقائيًا
            audio.play();
        }

        // عند النقر على الصورة
        image.addEventListener('click', () => {
            // تشغيل الأغنية إذا لم تكن قيد التشغيل
            if (audio.paused) {
                audio.play();
                localStorage.setItem('hasVisited', 'true'); // تحديث حالة الزيارة
            }
        });

        // استئناف الأغنية من النقطة التي توقفت عندها
        const savedTime = localStorage.getItem('currentTime');
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }

        // حفظ نقطة التوقف عند مغادرة الصفحة
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('currentTime', audio.currentTime);
        });