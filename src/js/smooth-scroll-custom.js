export default function smoothScrollCustom() {
    window.SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime    : 900,
        // Размер шага в пикселях 
        stepSize         : 75,

        // Дополнительные настройки:
        
        // Ускорение 
        accelerationDelta : 10,  
        // Максимальное ускорение
        accelerationMax   : 1,   

        // Поддержка клавиатуры
        keyboardSupport   : true,  
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll       : 50,

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,

        // Поддержка тачпада
        touchpadSupport   : true,
    })
}