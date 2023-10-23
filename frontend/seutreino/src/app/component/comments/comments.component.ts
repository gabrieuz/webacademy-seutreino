import { ProfissionalReviewService } from './../../services/profissional-review.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { ProfissionalReview } from 'src/app/model/profissionalReview.interface';
import { Professional } from 'src/app/model/professional';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalService } from 'src/app/services/professional.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  newComment: string = '';
  tags: any[] = [];
  selectedTags: any[] = [];
  tagComment: string = '';
  newRating: number = 0;
  value!: number;
  listProfessionalReview!: ProfissionalReview [];
  userLog: any;
  @Input()
  professional?: Professional;
  constructor(
    private activateRoute: ActivatedRoute,
    private tagService: TagService,
    public authService: AuthService,
    public ProfissionalReviewService: ProfissionalReviewService,
    public ProfessionalService: ProfessionalService
  ) { }


  ngOnInit(): void {
    this.authService.getUserInfo()?.subscribe((data) => {
      this.userLog = data
    })
    this.tagService.getTags().subscribe((data) => {
      this.tags = data.map((tag) => ({ ...tag, selected: false }));
    });
    let idProfissional = this.activateRoute.parent?.snapshot.params['idProfissional']
    if (idProfissional != undefined) {
      this.ProfessionalService.getProfessional(idProfissional).subscribe({
        next: (data) => {
          this.professional = data
        }
      })
    }
    this.ProfissionalReviewService.getProfessionalReviewByProfessional(idProfissional).subscribe({
      next: (data) => {
        this.listProfessionalReview = data
        console.log(this.listProfessionalReview);
        
      } 
    })

  }


  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push({ text: this.newComment, tags: [], rating: 0, locked: false });
      this.newComment = '';
    }
  }

  addTagComment() {
    if (this.selectedTags.length > 0) {
      this.comments.push({ text: "Tags: " + this.selectedTags.map((tag) => tag.name).join(', '), tags: [], rating: this.newRating, locked: true });
      this.comments.push({ text: "Tags: " + this.selectedTags.map((tag) => tag.name).join(', '), tags: [], rating: this.newRating, locked: true });
      this.tags.forEach((tag) => (tag.selected = false));
      this.selectedTags = [];
      this.newRating = 0;
    }
  }

  setRating(comment: any, rating: number) {
    if (!comment.locked) {
      comment.rating = rating;
    }
  }

  toggleTagSelection(tag: any) {
    tag.selected = !tag.selected;
    if (tag.selected) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter((selectedTag) => selectedTag !== tag);
    }
    console.log(this.selectedTags);

  }
  save() {

    if (this.professional != undefined) {
      let body: ProfissionalReview = {
        client: this.authService.loadUser(),
        clientId: this.authService.loadUser().id,
        professional: this.professional,
        professionalId: this.professional?.id,
        rating: this.value,
        tags: this.selectedTags,

      };

      this.ProfissionalReviewService.assess(body).subscribe({
        next: (data) => {
          console.log(data);
          this.ngOnInit()
          this.comments.push({
            text: "Tags: " + this.selectedTags.map((tag) => tag.name).join(', '),
            tags: this.selectedTags,
            rating: this.value,
            locked: true,
          });
        }
      })
    }
  }

}
