export default (actionType: string): string => {
  const iriSplit = actionType.split('/')
  return iriSplit[iriSplit.length - 2]
}
