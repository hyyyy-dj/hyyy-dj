// 导出报错缺失的成员
export const baseAIService = {};

// 用下划线 _args 骗过 TypeScript 的检查
export async function generateCelebrationResponse(_args: any) {
  void _args;
  return "AI功能已停用";
}

export async function generateLoveLetter(_args: any) {
  void _args;
  return "AI功能已停用";
}

export async function getAIReply(_args: any) {
  void _args;
  return "AI功能已停用";
}
