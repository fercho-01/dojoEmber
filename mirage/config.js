export default function() {
  this.namespace = '/api';
  this.get('/spies', function() {
    return {
      data: [{
        type: 'spy',
        id: 'spy001',
        attributes: {
          name: 'Brayan Maison',
          city: 'Medellín',
          type: 'Espía',
          image: 'http://cdn01.am.infobae.com/adjuntos/163/infografia/013/330/0013330024.jpg?0000-00-00-00-00-00'
        }
      }, {
        type: 'spy',
        id: 'spy002',
        attributes: {
          name: 'María Calamidades',
          city: 'Bogotá',
          type: 'Espía',
          image: 'http://www.cineycine.com/archivos/2099/09/espias-lucha.jpg'
        }
      }, {
        type: 'spy',
        id: 'spy003',
        attributes: {
          name: 'Otilio Benavidez',
          city: 'Valle',
          type: 'Luchador',
          image: 'https://gimnasiorizo.files.wordpress.com/2015/02/img_0291.jpg'
        }
      }]
    };
  });


}
