/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function (head, x) {
  if (!head || !head.next) {
    return head;
  }

  const bigHead = new ListNode(-1);
  const smallHead = new ListNode(-1);
  let bigNode = bigHead;
  let smallNode = smallHead;

  while (head) {
    if (head.val < x) {
      smallNode.next = head;
      smallNode = smallNode.next;
    } else {
      bigNode.next = head;
      bigNode = bigNode.next;
    }
    head = head.next;
  }
  bigNode.next = null;
  smallNode.next = bigHead.next;
  return smallHead.next;
};
