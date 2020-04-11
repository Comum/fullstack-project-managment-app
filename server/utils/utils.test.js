const { generateUserName, isUserInList } = require("./utils.js");

describe("generateUserName::", () => {
  const firstName = "Test";
  const lastName = "NamE";
  const result = generateUserName(firstName, lastName);

  it("should return the last name and the first character of the first name, all lowercase", () => {
    expect(result).toBe("namet");
  });
});

describe("isUserInList::", () => {
  const list = [{ userName: "batatas" }, { userName: "cebolas" }];

  describe("when a user is in the list", () => {
    const userName = "batatas";
    const result = isUserInList(userName, list);

    it("should return true", () => {
      expect(result).toBe(true);
    });
  });

  describe("when a user is not in the list", () => {
    const userName = "batatinhas";
    const result = isUserInList(userName, list);

    it("should return false", () => {
      expect(result).toBe(false);
    });
  });

  describe("when the list is empty", () => {
    const userName = "batatas";
    const result = isUserInList(userName, []);

    it("should return false", () => {
      expect(result).toBe(false);
    });
  });
});
