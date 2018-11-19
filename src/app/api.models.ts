export interface MemberSimple {
   name: string;
   forumHandle: string;
   legionId: string;
   id: number;
}

export interface PagedAPI<T> {
   items: T[];
   total_count: number;
}
