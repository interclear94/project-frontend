var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUserIdAndNickName } from "loginLogic/loginLogic.getUserInfo";
export function DoYouLike(boardId, category) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userinfo = yield getUserIdAndNickName();
            const resonse = yield fetch(`http://localhost:3000/like/${category}/${boardId}/whetherLike`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'userToken': userinfo.uid,
                }
            });
            if (!resonse.ok)
                throw new Error("좋아요 GET 로직 오류");
            const resonseMessage = yield resonse.json();
            return resonseMessage.isLike;
        }
        catch (err) {
            console.log("좋아요 정보 획득 오류 : ", err.mesaage);
        }
    });
}
