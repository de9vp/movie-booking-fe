import callApi from "../../../../apis/callApi";

export const postBooking = async (body, token) => {
    const res = await callApi(`QuanLyDatVe/DatVe`, 'POST', body, token);
    return new Promise((resolve, reject) => {
        if (res?.status === 200) {
            resolve({ data: res.data });
        }
    })
}