const { generateUserName, isUserPresentInList } = require("./utils.js");

describe("generateUserName::", () => {
  const firstName = "Test";
  const lastName = "NamE";
  const result = generateUserName(firstName, lastName);

  it("should return the last name and the first character of the first name, all lowercase", () => {
    expect(result).toBe("namet");
  });
});

describe("isUserPresentInList::", () => {
  const list = [
    { userName: "batatas", password: "1234" },
    { userName: "cebolas", password: "1234" },
  ];

  describe("when password is not provided", () => {
    describe("when the user is in the list", () => {
      const userName = "batatas";
      const result = isUserPresentInList(list, userName);

      it("should return true", () => {
        expect(result).toBe(true);
      });
    });

    describe("when the user is not in the list", () => {
      const userName = "batatinhas";
      const result = isUserPresentInList(list, userName);

      it("should return false", () => {
        expect(result).toBe(false);
      });
    });

    describe("when the list is empty", () => {
      const userName = "batatas";
      const result = isUserPresentInList([], userName);

      it("should return false", () => {
        expect(result).toBe(false);
      });
    });
  });

  describe("when password is provided", () => {
    describe("and the user and password are in the list", () => {
      const userName = "batatas";
      const password = "1234";
      const result = isUserPresentInList(list, userName, password);

      it("should return true", () => {
        expect(result).toBe(true);
      });
    });

    describe("and the user is in the list, but password is not", () => {
      const userName = "batatas";
      const password = "12345";
      const result = isUserPresentInList(list, userName, password);

      it("should return false", () => {
        expect(result).toBe(false);
      });
    });
  });
});
