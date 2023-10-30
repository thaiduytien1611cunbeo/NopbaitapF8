// (2023-10-29T18:18:32.190Z) -> Ngày 29-10-2023 1 giờ 18 phút 32 giây 190 mil

export const handleDate = (data) => {
    const date = new Date(data);

    let hour = date.getHours();
    let text = '';
    let minus = date.getMinutes();

    if(hour < 10) text = 'sáng';
    else if(hour <= 12) text = 'trưa';
    else if(hour <= 18) text = 'chiều';
    else if(hour <= 20) text = 'tối'
    else text = 'đêm';

    if(hour >= 12) hour -=12;

    return `${hour}h ${minus} phút ${text}`;
}

export const timerFc = (data) => {
    const date = new Date(data);
    const currentTime = new Date();
    const timer = (currentTime.getTime() - date.getTime()) / 1000;

    let updateTime = timer;
    let text = 'giây';


    if(updateTime > 60) {
        updateTime /= 60;
        text = 'phút';
        if(updateTime > 60) {
            updateTime /= 60;
            text = 'giờ';
            if(updateTime > 24) {
                updateTime /= 24;
                text = 'ngày';
                if(updateTime > 30) {
                    updateTime /= 30;
                    text = 'tháng';
                    if(updateTime > 12) {
                        updateTime /= 12;
                        text = 'năm';
                        if(updateTime > 3) {
                            return 'nhiều năm trước'
                        }
                    }
                }
            }
        }
    }
    
    return `${Math.floor(updateTime)} ${text} trước`
}
