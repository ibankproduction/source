
function convertToRupiah(angka) {
    let rupiah = '';
    let angkarev = angka.toString().split('').reverse().join('');
    for (let i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
}

function getToday() {
    let hari = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu',
    ];
    let bulan = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'July',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];
    let tanggal = new Date().getDate();
    let _hari = new Date().getDay();
    let _bulan = new Date().getMonth();
    let _tahun = new Date().getFullYear();

    let hari1 = hari[_hari];
    let bulan1 = bulan[_bulan];
    let tahun = (_tahun < 1000) ? _tahun + 1900 : _tahun;

    let hasil = hari1 + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;

    return hasil;
}

// console.log(getToday())

$(document).ready(function () {
    $('#waktu').append(getToday())
    const logam_url = 'https://i.rajaemasindonesia.co.id/api/logam';
    $.ajax({
        url: logam_url,
        method: 'GET',
        cache: false,
        dataType: 'json',
        success: function (results) {
            const logams = results.data
            // console.log(logams);
            $.each(logams, function (i, data) {
                $('#logam-list').append(`
                <tr>
                <th class="border border-dark" scope="row">`+ data.logam_mulia + `</th>
                <td class="border border-dark">` + data.persentase + `</td>
                <td class="table-success border border-dark">`+ convertToRupiah(data.harga_logam) + `,-</td>
                <td class="alert-danger border border-dark">` + data.kadar_logam + `</td>
                </tr>
                `);
            });
        }
    });

    const gold_url = 'https://i.rajaemasindonesia.co.id/api/gold';
    $.ajax({
        url: gold_url,
        method: 'GET',
        cache: false,
        dataType: 'json',
        success: function (results) {
            const golds = results.data
            // console.log(logams);
            $.each(golds, function (i, data) {
                $('#gold-list').append(`
                <tr>
                <th class="border border-dark" scope="row">`+ data.kadar_karat + `</th>
                <td class="table-primary border border-dark">`+ convertToRupiah(data.harga) + `,-</td>
                </tr>
                `);
            });
        }
    });

    const perhiasan_url = 'https://i.rajaemasindonesia.co.id/api/perhiasan';
    $.ajax({
        url: perhiasan_url,
        method: 'GET',
        cache: false,
        dataType: 'json',
        success: function (results) {
            const perhiasans = results.data
            // console.log(logams);
            $.each(perhiasans, function (i, data) {
                $('#perak-list').append(`
                <tr>
                <td class="table-success">`+ convertToRupiah(data.perak_hq) + `,-</td>
                <td class="table-primary">`+ convertToRupiah(data.perak_lq) + `,-</td>
                </tr>
                `);
            });
            $.each(perhiasans, function (i, data) {
                $('#paladium-list').append(`
                <tr>
                <td class="table-success">`+ convertToRupiah(data.paladium_hq) + `,-</td>
                <td class="table-primary">`+ convertToRupiah(data.paladium_lq) + `,-</td>
                </tr>
                `);
            });
            $.each(perhiasans, function (i, data) {
                $('#rhodium-list').append(`
                <tr>
                <td class="table-success">`+ convertToRupiah(data.rhodium_hq) + `,-</td>
                <td class="table-primary">`+ convertToRupiah(data.rhodium_lq) + `,-</td>
                </tr>
                `);
            });
            $.each(perhiasans, function (i, data) {
                $('#platinum-list').append(`
                <tr>
                <td class="table-success">`+ convertToRupiah(data.platinum_hq) + `,-</td>
                <td class="table-primary">`+ convertToRupiah(data.platinum_lq) + `,-</td>
                </tr>
                `);
            });
            $.each(perhiasans, function (i, data) {
                $('#iridium-list').append(`
                <tr>
                <td class="table-success">`+ convertToRupiah(data.iridium_hq) + `,-</td>
                <td class="table-primary">`+ convertToRupiah(data.iridium_lq) + `,-</td>
                </tr>
                `);
            });
        }
    });
});
