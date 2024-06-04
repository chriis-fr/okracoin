import Text "mo:base/Text";
import Principal "mo:base/Principal";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor Notes {

  public type Note = {
    title : Text;
    content : Text;
    owner : Principal;
  };

  stable var notes : List.List<Note> = List.nil<Note>();

  private let MAX_NOTE_CHARS = 500;

  public shared (msg) func createNote(titleText : Text, contentText : Text) {
    // assert titleText.size() > 0;
    assert contentText.size() > 0 and contentText.size() <= MAX_NOTE_CHARS;

    let newNote : Note = {
      title = titleText;
      content = contentText;
      owner = msg.caller;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show (notes));
  };

  // Utility function that helps writing assertion-driven code more concisely.
  private func expect<T>(opt : ?T, violation_msg : Text) : T {
    switch (opt) {
      case (null) {
        Debug.trap(violation_msg);
      };
      case (?x) {
        x;
      };
    };
  };

  public shared query (msg) func readNotes() : async [Note] {
    let callerNotes : List.List<Note> = List.filter(notes, func(note : Note) : Bool { note.owner == msg.caller });
    List.toArray(callerNotes);
  };

  public shared (msg) func removeNote(id : Nat) {
    let note = expect(List.get(notes, id), "Note not found");
    assert note.owner == msg.caller;
    let listFront = List.take(notes, id);
    let listBack = List.drop(notes, id + 1);

    notes := List.append(listFront, listBack);
  };
};