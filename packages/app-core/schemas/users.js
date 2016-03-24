UserSchema = new SimpleSchema({
  _id: {
    type: String
  },
  createdAt: {
    type: Date,
  },
  services: {
    type: Object,
    blackbox: true
  },
  username: {
    type: String
  }
});
