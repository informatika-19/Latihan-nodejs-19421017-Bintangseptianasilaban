//Array

//const listNilai = ['A' , 'B' , 'C']
//console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'bintang septiana',
        npm: '19421017',
        prodi: 'Informatika'
    },
    {
        nama: 'cahya ',
        npm: ' 19421070',
        prodi: 'informatika'
    }
    
]
//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
}