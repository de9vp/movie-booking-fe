import callApi from "../../../../apis/callApi";

export async function getMovieDetail(movieId) {
    const res = await callApi(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`, '', '')
    return new Promise((resolve, reject) => {
        if (res?.status === 200) {
            resolve({ data: res.data });
        }
    })
}