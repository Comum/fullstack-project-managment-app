const {
  filterArrayOfObjectsByProperty,
  generateUserName,
  generateTaskId,
  getUserInfo,
  getArrayIndex,
  isUserPresentInList,
} = require("./utils.js");

describe("Utils", () => {
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

  describe("getUserInfo::", () => {
    const list = [{ userName: "barf", firstName: "foo", lastName: "bar" }];

    describe("when the user is in the list", () => {
      const userName = "barf";
      const result = getUserInfo(list, userName);

      it("should return the object of the user", () => {
        expect(result).toEqual({
          userName: "barf",
          firstName: "foo",
          lastName: "bar",
        });
      });
    });

    describe("when the user is not in the list", () => {
      const userName = "foob";
      const result = getUserInfo(list, userName);

      it("should return the object of the user", () => {
        expect(result).toEqual({});
      });
    });
  });

  describe("filterArrayOfObjectsByProperty::", () => {
    const list = [
      { projectOwner: "user1", projectName: "proj1" },
      { projectOwner: "user2", projectName: "proj2" },
      { projectOwner: "user4", projectName: "proj4" },
    ];

    describe("when inverted is not provided", () => {
      describe("and when a user has projects", () => {
        const userName = "user1";
        const response = filterArrayOfObjectsByProperty(
          list,
          userName,
          "projectOwner"
        );

        it("should return the user projects", () => {
          expect(response).toEqual([
            { projectOwner: "user1", projectName: "proj1" },
          ]);
        });
      });

      describe("and when a user does not have projects", () => {
        const userName = "user3";
        const response = filterArrayOfObjectsByProperty(
          list,
          userName,
          "projectOwner"
        );

        it("should return an empty array", () => {
          expect(response).toEqual([]);
        });
      });
    });

    describe("when inverted is provided", () => {
      describe("and when there are multiple projects", () => {
        const userName = "user1";
        const response = filterArrayOfObjectsByProperty(
          list,
          userName,
          "projectOwner",
          true
        );

        it("should return projects without the wanted value", () => {
          expect(response).toEqual([
            { projectOwner: "user2", projectName: "proj2" },
            { projectOwner: "user4", projectName: "proj4" },
          ]);
        });
      });
    });
  });

  describe("generateTaskId::", () => {
    describe("when task array is empty", () => {
      const result = generateTaskId([]);

      it("should return id 0", () => {
        expect(result).toBe(0);
      });
    });

    describe("when task array is populated", () => {
      const result = generateTaskId([
        { taskId: 0 },
        { taskId: 1 },
        { taskId: 2 },
        { taskId: 3 },
      ]);

      it("should return the last id incremented", () => {
        expect(result).toBe(4);
      });
    });
  });

  describe("getArrayIndex::", () => {
    describe("when an array has multiple entries", () => {
      const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
      const result = getArrayIndex(list, 3, "id");

      it("should return the index that matches the search param", () => {
        expect(result).toBe(3);
      });
    });

    describe("when the array is empty", () => {
      const result = getArrayIndex([], 3, "id");

      it("should return the index that matches the search param", () => {
        expect(result).toBe(-1);
      });
    });
  });
});
