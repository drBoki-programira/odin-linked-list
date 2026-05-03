import { LinkedList } from "../src/linkedList";

describe("LinkedList class methods tests", () => {
  let list
  let filledList

  beforeEach(() => {
    list = new LinkedList()

    filledList = new LinkedList()
    filledList.prepend("dog")
    filledList.prepend("cat")
    filledList.prepend("mouse")
    filledList.prepend("cow")
  })

  test("Add value to the end of the empty list", () => {
    list.append("dog")
    expect(list.next.value).toBe("dog")
  })

  test("Add value to the end of the list of 3", () => {
    list.append("dog")
    list.append("cat")
    list.append("mouse")
    expect(list.next.next.next.value).toBe("mouse")
  })

  test("Add value to the beggining of the empty list", () => {
    list.prepend("dog")
    expect(list.next.value).toBe("dog")
  })

  test("Add value to the beggining of the list of 3", () => {
    list.prepend("dog")
    list.prepend("cat")
    list.prepend("mouse")
    expect(list.next.value).toBe("mouse")
    expect(list.next.next.next.value).toBe("dog")
  })

  test("Size of an empty list is 0", () => {
    expect(list.size()).toBe(0) 
  })

  test("Size of 4 element list is 4", () => {
    expect(filledList.size()).toBe(4) 
  })

  test("Head of an empty list is not defined", () => {
    expect(list.head()).toBe(undefined)
  })

  test("Head returns value of the first node", () => {
    expect(filledList.head()).toBe("cow")
  })

  test("Tail of an empty list is not defined", () => {
    expect(list.tail()).toBe(undefined)
  })

  test("Tail returns value of the last node", () => {
    expect(filledList.tail()).toBe("dog")
  })

  test("Returns undefined if there is no node at the given index", () => {
    expect(filledList.at(5)).toBe(undefined)
  })

  test("Returns node value for the given index", () => {
    expect(filledList.at(2)).toBe("cat")
  })

  test("Returns node value for the given index (first element)", () => {
    expect(filledList.at(0)).toBe("cow")
  })

  test("Returns node value for the given index (last element)", () => {
    expect(filledList.at(3)).toBe("dog")
  })

  test("Returns undefined if list is empty", () => {
    expect(list.pop()).toBe(undefined)
  })

  test("Returns head node value and removes it from list", () => {
    expect(filledList.pop()).toBe("mouse")
    expect(filledList.size()).toBe(3)
  })

  test("Returns false if list is empty", () => {
    expect(list.contains("dog")).toBe(false)
  })

  test("Returns true if list contains value", () => {
    expect(filledList.contains("dog")).toBe(true)
  })

  test("Returns false if list doesn't contain value", () => {
    expect(filledList.contains("snake")).toBe(false)
  })

  test("Returns -1 for the searched value if list is empty", () => {
    expect(list.findIndex("chicken")).toBe(-1)
  })

  test("Returns -1 for the searched value if it isn't in the list", () => {
    expect(filledList.findIndex("chicken")).toBe(-1)
  })

  test("Returns index for the searched value", () => {
    expect(filledList.findIndex("cat")).toBe(2)
  })

  test("Returns index for the searched value (last element)", () => {
    expect(filledList.findIndex("dog")).toBe(3)
  })

  test("Returns first index for the searched value if more of the same values are present", () => {
    filledList.prepend("cat")
    expect(filledList.findIndex("cat")).toBe(0)
  })

  test("Returns an empty string if list is empty", () => {
    expect(list.toString()).toBe("")
  })

  test("Returns string representation of the list", () => {
    expect(filledList.toString()).toBe("( cow ) -> ( mouse ) -> ( cat ) -> ( dog ) -> null")
  })

  test("Throws an error if index is out of range", () => {
    expect(() => filledList.insertAt(5, "chicken")).toThrow(RangeError)
  })

  test("Inserts values at the given index", () => {
    filledList.insertAt(1, "wolf", "snake", "lion")
    expect(filledList.toString()).toBe(
      "( cow ) -> ( wolf ) -> ( snake ) -> ( lion ) -> ( mouse ) -> ( cat ) -> ( dog ) -> null"
    )
  })

  test("Throws an error if index to remove is out of range", () => {
    expect(() => filledList.removeAt(5)).toThrow(RangeError)
  })

  test("Removes value at the given index", () => {
    filledList.removeAt(1)
    expect(filledList.toString()).toBe(
      "( cow ) -> ( cat ) -> ( dog ) -> null"
    )
  })
})


