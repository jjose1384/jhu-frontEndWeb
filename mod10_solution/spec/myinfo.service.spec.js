describe('MyinfoServiceTest', function () {

  var MyinfoService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      MyinfoService = $injector.get('MyinfoService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('Could not validate', function() {

    var shortName = "A";
    MyinfoService.getMyinfo().favorite = shortName;


    $httpBackend.whenGET(ApiPath + '/menu_items/'+ shortName +'.json')
    .respond(500, '');

    MyinfoService.validateAndSaveMyinfo()
    .then(function(response) {
      expect(MyinfoService.getMyinfo().signedUp).not.toBe(true);
      console.log(MyinfoService.getMyinfo().signedUp);
    });
    

    $httpBackend.flush();
  });

  it('Validated', function() {

    var shortName = "A1";
    MyinfoService.getMyinfo().favorite = shortName;

    $httpBackend.whenGET(ApiPath + '/menu_items/'+ shortName +'.json')
    .respond(200, '');

    MyinfoService.validateAndSaveMyinfo()
    .then(function(response) {
      expect(MyinfoService.getMyinfo().signedUp).toBe(true);
      console.log(MyinfoService.getMyinfo().signedUp);
    });

    $httpBackend.flush();
  });

});
