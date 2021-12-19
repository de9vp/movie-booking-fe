import callApi from "../../../../apis/callApi";

export const getSeatPlan = async (maLichChieu) => {
    const res = await callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`, '', '');
    return new Promise((resolve, reject) => {
        if (res?.status === 200) {
            resolve({ data: res.data });
        }
    })
}

