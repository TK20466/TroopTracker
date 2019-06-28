export interface MemberSimple {
   name: string;
   forumHandle: string;
   legionId: string;
   id: number;
}

export interface MemberDetail extends MemberSimple {
   forumAvatar: string;
   defaultAvatar: boolean;
   approved: Date;
   status: string;
   garrison: string;
}

export interface EventSimple {
   title: string;
   startDate: Date;
   id: number;
}

export interface EventAttendenceSimple extends EventSimple {
   costumed: boolean;
}

export interface PagedAPI<T> {
   items: T[];
   total: number;
}
