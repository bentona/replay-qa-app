var traits = [
  'email',
  'password',
  'name',
  'timezone',
  'locale',
  'locale_id',
  'organization_id',
  'role',
  'custom_role_id',
  'phone',
  'verified'
];

function parseUserDoc(req){
  var doc = {};

  for(var i=0;i<traits.length; i++){
    doc[traits[i]] = req.body[traits[i]];
  }
  return doc;
};

module.exports = parseUserDoc;
